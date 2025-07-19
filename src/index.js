const express = require("express");
const app = express();
const { PORT } = require("./config/server.config");
const errorHandler = require("./utils/errorHandler");
const apiRouter = require("./routes/index");
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/api", apiRouter);
app.use(errorHandler);
app.listen(PORT, () => {
  console.log(`Server started on port:${PORT}`);
});
