const mongoose = require("mongoose");

const PostSchema = mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      min: 3,
      max: 25,
    },
    content: {
      type: String,
      required: true,
    },
    category: {
      type: String,
      required: true,
    },
    userId: {
      type: String,
      required: true,
    },
    thumbnail: {
      type: String,
      default: "",
    },
    comments: [
      {
        userId: {
          type: String,
          required: true,
        },
        comment: {
          type: String,
          required: true,
        },
      },
      { timestamps: true },
    ],
    likes: {
      type: Array,
      default: [],
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Post", PostSchema);
