import { Router } from "express";
import { registerUser } from "../controllers/user.controller.js";
//import { validateRegisterInput } from "../middlewares/validateUser.js"; // You'll need to create this

const router = Router();

/**
 * @route POST /api/v1/users/register
 * @description Register a new user
 * @access Public
 */
router.post("/register", validateRegisterInput, registerUser);

export default router;