import express from "express";
import dotenv from "dotenv";
import colors from "colors";
const app = express();

import usersRoute from "./routes/usersRoute.js";
import blogRoutes from "./routes/blogRoutes.js";
import connectDB from "./config/database.js";
import errorHandler from "./middleware/errorMiddleware.js";

dotenv.config();

app.use(express.json());

app.get("/", (req, res) => res.send("Blogger Api running"));

connectDB();

// Load Routes
app.use("/api/v1/users", usersRoute);
app.use("/api/v1/blogs", blogRoutes);
app.use(errorHandler);

const PORT = 5000 || process.env.PORT;

app.listen(process.env.PORT, () =>
  console.log(
    `server running on port ${PORT} in ${process.env.NODE_ENV} mode`.yellow.bold
      .underline
  )
);
