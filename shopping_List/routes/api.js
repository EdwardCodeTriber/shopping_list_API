import express from "express";
import itemController from "../controllers/itemController.js";
import userController from "../controllers/userController.js";
import protect from "../middleware/authMiddleware.js";

const router = express.Router()

router.post("/user", userController.registerUser)
router.post("/user/login", userController.loginUser)
router.post("/items", protect,  itemController.createItem)
router.get("/items", protect, itemController.getItems)
router.get("/items/:id", itemController.getItem)

export default router;