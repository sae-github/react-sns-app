const router = require("express").Router();
const User = require("../models/User");

router.get("/:id", async (req, res) => {
  try {
    const res = await User.findById(req.params.id);
    const { password, updatedAt, ...other } = res._doc;
    return res.status(200).json(other);
  } catch (err) {
    return res.status(500).json(err);
  }
});

module.exports = router;
