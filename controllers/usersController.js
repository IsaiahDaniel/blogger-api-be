import asyncHandler from "express-async-handler";
import bcrypt from "bcryptjs";

import { generateToken } from "../services/tokenService.js";
import User from "../models/usersModel.js";
import ErrorResponse from "../utils/ErrorResponse.js";

// @route     GET /api/v1/users/register
// @desc      Register User
// @access    public

const registerUser = asyncHandler(async (req, res, next) => {
  const { email, password, username } = req.body;

  const userExists = await User.findOne({ email });

  if (userExists) {
    return next(new ErrorResponse(`invalid credentials`, 400));
  }

  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(password, salt);

  const user = await User.create({ email, password: hashedPassword, username });

  const token = generateToken(user._id);

  res.status(201).json({ success: true, token });
});

// @route     GET /api/v1/users/register
// @desc      Register User
// @access    public

const loginUser = asyncHandler(async (req, res, next) => {
  const { email, password } = req.body;

  const userExists = await User.findOne({ email });

  if (!userExists) {
    return next(new ErrorResponse(`invalid credentials`, 400));
  }

  const isMatch = await bcrypt.compare(password, userExists.password);

  if (!isMatch) {
    return next(new ErrorResponse(`invalid credentials`, 400));
  }

  const token = generateToken(userExists._id);

  res.status(201).json({ success: true, token });
});

export { registerUser, loginUser };
