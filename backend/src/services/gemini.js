import { GoogleGenAI } from "@google/genai";

// The client gets the API key from the environment variable `GEMINI_API_KEY`.
const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });




function extractJson(text) {
 
  try {
    // Remove markdown code blocks ```json ... ```
    const cleaned = text.replace(/```json|```/g, "").trim();

    // Find first { ... } block
    const jsonMatch = cleaned.match(/\{[\s\S]*\}/);
    if (!jsonMatch) throw new Error("No JSON found in response");

    return JSON.parse(jsonMatch[0]);
  } catch (err) {
    console.error("Failed to extract JSON:", text);
    throw err;
  }
}

async function generateBillInfo(base64ImageFile, mimeType = "image/jpeg") {
   const sysin = `You are a model that analyzes electricity bills and creates a baseline for saved energy tracker applications.
    based on the past results of the bill image provided, create a baseline for energy consumption.
    Get the baseline by analyzing the average consumption from the bill image provided, and at the same time also take into account the weather, holidays, and other factors that may affect energy consumption.
    and other important external factors that affects the consumption and the user, and from this create a rough estimation of baseline for energy consumption.

    Return a JSON object with the following keys:
    current_usage: number (the current usage in kWh)
    energy_saved: number (the energy saved in kWh compared to last month)
    month: string (the month of the bill)
    rate_this_month: number (the rate for this month in kWh)
    actual_consumption: number (the actual consumption in kWh)
    message: string (a brief analysis of the bill + tips to save energy)
    baseline: number (the baseline energy consumption in kWh)

    `;
  try {
    const contents = [
      {
        inlineData: {
          mimeType: mimeType,
          data: base64ImageFile,
        },
      },
      { text: sysin },
    ];

    const response = await ai.models.generateContent({
      model: "gemini-2.5-flash-lite",
      contents,
    });

    // Parse the response text as JSON
    const result = extractJson(response.text);

    // Return structured data
    return {
      month: result.month,
      rate_this_month: result.rate_this_month,
      actual_consumption: result.actual_consumption,
      message: result.message,
    };
  } catch (error) {
    console.error("Error generating bill info:", error);
    throw error;
  }
}

async function generateChatText(prompt) {
  const sysin = `You are a helpful assistant for the Sinag platform — a website that tracks monthly energy savings and rewards users with SINAG tokens based on their reduced electricity consumption.
    Your role is to:
    Explain the scope and purpose of the Sinag website.
    Describe how users can earn or receive SINAG tokens through energy-saving efforts.
    Provide concise, practical tips to help users save energy effectively at home or in the workplace.
    Always keep responses concise, accurate, and on-topic.
    If a question is unrelated to Sinag, its tokens, or energy saving, politely decline to answer and remind the user that you can only respond to queries about the Sinag platform and energy efficiency.`;
  try {
    const contents = [
      sysin,
      prompt
    ]

    const response = await ai.models.generateContent({
    model: "gemini-2.5-flash",
    contents: contents,
    });

    const result = response.text
    return result;

  } catch (error) {
    console.error("Error generating chat text:", error);
    throw error;
    
  }
}
export default generateBillInfo;