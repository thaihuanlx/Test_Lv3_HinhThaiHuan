import express from "express";
import {
  getUser,
  updateUser,
  deleteUser,
} from "../controllers/userController.js";
import { checkAuth } from "../middlewares/authMiddleware.js";

const router = express.Router();

router.use(checkAuth);

router.get("/:userId", getUser);
router.put("/:userId", updateUser);
router.delete("/:userId", deleteUser);

export default router;
