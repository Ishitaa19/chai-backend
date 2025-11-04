import { asyncHandler } from "../utils/asyncHandler.js";
import { ApiError } from "../utils/ApiError.js";

export const registerUser = asyncHandler(async (req, res) => {
  // ...existing code...
  res.status(201).json({
    success: true,
    message: "User registered successfully",
    // data: user // Uncomment after adding user creation
  });
});
