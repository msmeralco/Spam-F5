
import { response, Router } from "express";
import multer from "multer";
import generateBillInfo from "./generate.js";

const router = Router();
const upload = multer({storage: multer.memoryStorage()}); // store in memorry

// async function handleChatbotRequest(req, res) {
//     try {
//         const { message, prompt } = req.body;  
//         if (!message || !prompt) {
//             return res.status(400).json({ error: "Message / prompt is required" });
//         }
        
//         //logic later (placeholder)

//         res.status(200).json({ reply: `This is a placeholder response from the chatbot. you typed ${prompt} and ${message}` });
//     }
//         catch (error) {
//         console.error("Error handling chatbot request:", error);
//         res.status(500).json({ error: "Internal Server Error" });
//     }
// }
// router.post("/chat", handleChatbotRequest);


router.post("/upload", upload.single("file"), async (req, res) => {
    try {
        if (!req.file) {
            return res.status(400).json({ error: "File is required" });
        }

        const base64ImageFile = req.file.buffer.toString("base64");
        const gemini_response = await generateBillInfo(base64ImageFile, req.file.mimetype);
        
        // Return structured data
        res.status(200).json({
        filename: req.file.originalname,
        ...gemini_response,
        });

    } catch (error) {
        console.error("Error handling file upload:", error);
        res.status(500).json({ error: "Internal Server Error" });
    }
});

router.post("/extract", async (req, res) => {
    try {
        const current_usage = new res.json(req.body);
        res.status(200).json({
            message: `You have used ${current_usage} kWh this month.`,
            current_usage: current_usage,
            
        });





    } catch (error) {
        console.error("Error handling extraction request:", error);
        res.status(500).json({ error: "Internal Server Error" });
    }
 })






export default router;