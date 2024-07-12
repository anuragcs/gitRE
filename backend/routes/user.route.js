// user.route.js

import express from "express";
import { getUserProfileAndRepos } from "../controllers/user.controller.js";

const router = express.Router();

// Define route with parameter ":username"
router.get("/profile/:username", getUserProfileAndRepos);

export default router;