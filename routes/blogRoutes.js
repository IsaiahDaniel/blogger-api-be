import express from "express";
const router = express.Router();

import { getBlogs } from "../controllers/blogsController.js";

router.get("/", getBlogs);

export default router;
