import "dotenv/config";
import express  from "express";
import mongoose from "mongoose";
import cors from "cors"

const app = express();
const PORT = process.env.PORT || 8080;

app.use(express.json());
app.use(cors());

// MongoDB connection with the .env file
// mongoose.connect(process.env.MONGO_URL)
// .then(() => console.log("Connection successful"))
// .catch((err) => console.log(err))

app.listen(PORT, () => console.log(`Server has started on ${PORT}`))