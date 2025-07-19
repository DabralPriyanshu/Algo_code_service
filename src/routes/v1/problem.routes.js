const express = require("express");
const { ProblemController } = require("../../controllers/index");
const problemRouter = express.Router();
problemRouter.get("/", ProblemController.getProblem);

module.exports = problemRouter;
