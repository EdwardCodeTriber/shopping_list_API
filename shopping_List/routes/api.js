import express from "express";
import itemController from "../controllers/itemController.js";


const router = express.Router()

router.post("/items",itemController.createItem)
router.get("/items", itemController.getItems)
router.get("/items/:id", itemController.getItem)

export default router;