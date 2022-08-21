import connectDB from "./config/database.js";
import User from "./models/usersModel.js";
import Blog from "./models/blogModel.js";
import colors from "colors";
import dotenv from "dotenv";
import fs from "fs";

dotenv.config();

connectDB();

const importData = async () => {
  const blogs = JSON.parse(fs.readFileSync(`./data/blogs.json`, "utf-8"));

  try {
    await Blog.create(blogs);
    console.log(`Data imported`.inverse.green);
    process.exit();
  } catch (err) {
    console.log("data import Error", err);
    console.log(`Error importing Data`.inverse.red);
    process.exit();
  }
};

const destroyData = async () => {
  try {
    await Blog.deleteMany(blogData);
    console.log(`Data imported`.inverse.green);
    process.exit();
  } catch (err) {
    console.log("data Destroy Error", err);
    console.log(`Data destroyed`.inverse.red);
    process.exit();
  }
};

if (process.argv[2] === "-i") {
  importData();
} else if (process.argv[2] === "-d") {
  destroyData();
}
