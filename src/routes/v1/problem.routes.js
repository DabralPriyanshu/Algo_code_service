const express = require("express");
const problemRouter = express.Router();
problemRouter.get("/", (req, res) => {
  res.send("on");
});

module.exports = problemRouter;
