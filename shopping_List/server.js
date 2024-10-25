import "dotenv/config";
import express  from "express";
import mongoose from "mongoose";
import cors from "cors"
// Imported js files must include their extension .js always
import router from "./routes/api.js";
import connectDB from "./config/database.js";


const app = express();
const PORT = process.env.PORT || 8080;

app.use(express.json());
app.use(cors());
app.use("/api/v1", router)
// MongoDB connection with the .env file
connectDB()


app.listen(PORT, () => console.log(`Server has started on  http://localhost:${PORT}`))