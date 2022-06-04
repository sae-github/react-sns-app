const router = require("express").Router();
const User = require("../models/User");

// 特定のユーザーの取得
router.get("/:id", async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    const { password, updatedAt, ...other } = user._doc;
    res.status(200).json(other);
  } catch (err) {
    return res.status(500).json(err);
  }
});

// ユーザーの追加
router.post("/", async (req, res) => {
  try {
    const user = new User({
      username: req.body.username,
      email: req.body.email,
      password: req.body.password,
    });
    await user.save();
    return res.status(200).json(user);
  } catch (error) {
    return res.status(500).json(err);
  }
});

module.exports = router;
