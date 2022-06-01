const router = require("express").Router();
const User = require("../models/User");

router.get("/:id", async (req, res) => {
  try {
    const res = await User.findById(req.params.id);

  } catch (err) {
    return res.status(500).json(err);
  }
});

module.exports = router;
