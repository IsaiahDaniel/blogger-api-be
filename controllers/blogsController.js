import asyncHandler from "express-async-handler";
import ErrorResponse from "../utils/ErrorResponse.js";
import Blog from "../models/blogModel.js";

// @route       /api/v1/blogs
// @desc        Get All Blogs
// @desc        private

const getBlogs = asyncHandler(async (req, res) => {
  const blogs = await Blog.find();
  res.status(200).json({ success: true, data: blogs, count: blogs.length });
});

// @route       /api/v1/blogs/:id
// @desc        Get single Blog
// @desc        private

const getBlog = asyncHandler(async (req, res) => {
  const blog = await Blog.findOne({ id: req.params.id });

  if(!blog){
    return next(new ErrorResponse(`No blog with the id ${req.params.id}`));
  }

  res.status(200).json({ success: true, data: blog });
});


export { getBlogs, getBlog };
