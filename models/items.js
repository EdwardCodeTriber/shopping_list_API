import mongoose from "mongoose";
import { type } from "os";

const itemSchema = new mongoose.Schema({
    name: {type: String, required: true},
    quantity: {type: Number, required: true},
    notes: {type: String},
    category: {type: String},
    tags: {String},
    createAt: {type: Date, default: Date.now()}
})

export default mongoose.model("item", itemSchema)