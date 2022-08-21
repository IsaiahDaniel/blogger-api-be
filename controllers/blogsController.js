import asyncHandler from "express-async-handler";
import ErrorResponse from "../utils/ErrorResponse.js";
import Blog from "../models/blogModel.js";

// @route       /api/v1/blogs
// @desc        Get All Blogs
// @desc        private

const getBlogs = asyncHandler(async (req, res) => {
  const blogs = [
    {
      id: 3,
      title: "An Introduction to angular",
      content: "Lorem ipsum dolor sit amet",
    },
    {
      id: 2,
      title: "An Introduction to React",
      content: "Lorem ipsum dolor sit amet",
    },
    {
      id: 3,
      title: "An Introduction to Vue",
      content: "Lorem ipsum dolor sit amet",
    },
  ];

  // const blogs = await Blog.find();

  res.status(200).json({ success: true, data: blogs, count: blogs.length });
});

export { getBlogs };
