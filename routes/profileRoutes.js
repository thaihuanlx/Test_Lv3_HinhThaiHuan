import express from "express";
import {
  getProfile,
  createProfile,
  updateProfile,
  deleteProfile,
} from "../controllers/profileController.js";
import { checkAuth } from "../middlewares/authMiddleware.js";

const router = express.Router();

router.use(checkAuth);

router.get("/:profileId", getProfile);
router.post("/", createProfile);
router.put("/:profileId", updateProfile);
router.delete("/:profileId", deleteProfile);

export default router;
