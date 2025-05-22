import mongoose from "mongoose";

const postSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
  author: {
    type: String,
    required: true,
  },
  authorImg: {
    type: String,
    required: false, // Optional author image URL
  },
  image: {
    type: String,
    required: false, // Optional post image URL
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

const BlogModel = mongoose.models.blog || mongoose.model('blog', postSchema);

export default BlogModel;
