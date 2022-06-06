const router = require("express").Router();
const Post = require("../models/Post");

// 投稿を作成
router.post("/", async (req, res) => {
  const newPost = new Post(req.body);
  try {
    const savedPost = await newPost.save();
    return res.status(200).json(savedPost);
  } catch (err) {
    return res.status(500).json(err);
  }
});

//　全ての投稿を取得する
router.get("/", async (req, res) => {
  try {
    const post = await Post.find();
    return res.status(200).json(post);
  } catch (err) {
    return res.status(403).json(err);
  }
});

//　指定したカテゴリーのデータを取得する
router.get("/category/:category", async (req, res) => {
  try {
    const post = await Post.find({ category: req.params.category });
    return res.status(200).json(post);
  } catch (err) {
    return res.status(403).json(err);
  }
});

// 投稿を取得する
router.get("/:id", async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);
    return res.status(200).json(post);
  } catch (err) {
    return res.status(403).json(err);
  }
});

module.exports = router;
