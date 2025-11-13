
import { response, Router } from "express";
import multer from "multer";
import generateBillInfo from "../services/gemini.js";
import generateChatText from "../services/gemini.js";

const router = Router();
const upload = multer({storage: multer.memoryStorage()}); // store in memorry



router.post("/chat", async(req, res) => {
    try {
        const { prompt } = req.body;
        if (!prompt) {
            return res.status(400).json({ error: "Message / prompt is required" });
        }
        res.status(200).json({ response: `${generateChatText(prompt)}` });
    } catch (error) {
        console.error("Error handling chatbot request:", error);
        res.status(500).json({ error: "Internal Server Error" });
    }   
});

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


export default router;