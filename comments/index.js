const express = require("express");
const app = express();
const port = 4001;
const { randomBytes } = require("crypto");

const commentsByPostId = {};

app.use("/", express.json());

app.get("/posts/:id/comments", (req, res) => {
  res.send(commentsByPostId[req.params.id] || []);
});

app.post("posts/:id/comments", (req, res) => {
  const commentId = randomBytes(4).toString("hex");
  const { content } = req.body;
  const comments = commentsByPostId[req.params.id] || [];
  comments.push({ id: commentId, content });
  commentsById[req.params.id] = comments;
  res.status(201).send(comments);
});

app.listen(port, () => {
  console.log(`Comments Server listening on port ${port}`);
});
