import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({});

const sysin = `
You are a model that analyzes electricity bills and creates a baseline for saved energy tracker applications.

Return a JSON object with the following keys:
month: string (the month of the bill)
rate_this_month: number (the rate for this month in kWh)
actual_consumption: number (the actual consumption in kWh)
message: string (a brief analysis of the bill + tips to save energy)
baseline: number (a baseline consumption value in kWh to compare against)

Analyze the provided electricity bill image and extract the required information.
if any info in missing, return null for that field.
`;



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
      model: "gemini-2.5-flash",
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

export default generateBillInfo;