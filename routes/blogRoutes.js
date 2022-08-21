import express from "express";
const router = express.Router();

import { getBlogs, getBlog } from "../controllers/blogsController.js";

router.get("/", getBlogs);
router.get("/:id", getBlog);

export default router;
