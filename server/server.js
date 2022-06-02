const express = require("express");
const app = express();
const cors = require('cors')
const mongoose = require("mongoose");
const PORT = 3001;
require("dotenv").config();
app.use(cors())
//DB接続
mongoose.connect(process.env.MONGODB_URL)
  .then(() => {
    console.log("DB接続中...")
  })
  .catch((err) => {
    console.log(err);
  })

const userRoute = require("./routes/users");
const postRoute = require("./routes/posts");

app.use(express.json());
app.use("/api/users", userRoute);
app.use("/api/posts", postRoute);

app.listen(PORT, () => {
  console.log("サーバーが起動中");
});




