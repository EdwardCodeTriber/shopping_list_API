import express from "express";
import createItem from "../controllers/itemController";


const router = express.Router()

router.post("/items", createItem)

export default router;