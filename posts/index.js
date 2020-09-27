const express = require("express");
const app = express();
const port = 4000;
const { randomBytes } = require("crypto");

const posts = {};

app.get("/posts", (req, res) => {
  res.send(posts);
});

app.use("/", express.json());
app.post("/posts", (req, res) => {
  const id = randomBytes(4).toString("hex");
  const { title } = req.body;
  posts[id] = { id, title };

  res.send(posts);
  console.log(posts);
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});

module.exports = posts;
