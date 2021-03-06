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

// favorite 登録 or 解除
router.put("/:id/favorite", async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);
    if (!post.likes.includes(req.body.userId)) {
      await post.updateOne({
        $push: {
          likes: req.body.userId,
        },
      });
      return res.status(200).json("投稿をお気に入りに登録しました");
    } else {
      await post.updateOne({
        $pull: {
          likes: req.body.userId,
        },
      });
      return res.status(200).json("投稿をお気に入りから解除しました");
    }
  } catch (err) {
    return res.status(403).json(err);
  }
});

// コメントの投稿
router.post("/:id/comment", async (req, res) => {
  try {
    await Post.findByIdAndUpdate(req.params.id, {
      $push: { comments: req.body },
    });
    return res.status(200).json("コメントが投稿されました");
  } catch (error) {
    console.error(error);
    return res.status(500).json(error);
  }
});

module.exports = router;
