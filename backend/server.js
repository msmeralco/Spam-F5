import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import chatBotRoutes from "./src/routes/generate.js";



// Load environment variables
dotenv.config();

// Import routes
// import userRoutes from "./src/routes/user.routes.js";


const app = express();
// Enable CORS
app.use(cors());
// Middleware
app.use(express.json()); // Parse JSON bodies

// ✅ Register your routes
// app.use("/api/users", userRoutes); // All routes in userRoutes are prefixed with /api/users
app.use("/chatbot", chatBotRoutes); // All routes in chatBotRoutes are prefixed with /api/chatbot

// Health check
app.get("/", (req, res) => {
  res.send("🚀 API is running!");
});

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`⚡ Server running on port ${PORT}`));
