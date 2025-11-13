
import { response, Router } from "express";
import multer from "multer";
import generateBillInfo from "../services/gemini.js";

const router = Router();
const upload = multer({storage: multer.memoryStorage()}); // store in memorry

async function handleChatbotRequest(req, res) {
    try {
        const { message, prompt } = req.body;  
        if (!message || !prompt) {
            return res.status(400).json({ error: "Message / prompt is required" });
        }
        
        //logic later (placeholder)

        res.status(200).json({ reply: `This is a placeholder response from the chatbot. you typed ${prompt} and ${message}` });
    }
        catch (error) {
        console.error("Error handling chatbot request:", error);
        res.status(500).json({ error: "Internal Server Error" });
    }
}

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

router.post("/chat", handleChatbotRequest);

export default router;