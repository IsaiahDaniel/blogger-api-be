import mongoose from "mongoose";

const blogSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, "title is required"]
  },
  content: {
    type: String,
    required: [true, "Content is required"]
  },
  comments: [
    {
        user: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "user"
        },
        comment: {
            type: String,
        },
        date: {
            type: Date,
            default: Date.now()
        }
    }
  ],
  likes: [
    {
        user: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "user"
        },
    }
  ]
},  { timestamps: true })

const Blog = mongoose.model("blog", blogSchema);

export default Blog;