const express = require("express");
const app = express();
const { PORT } = require("./config/server.config");
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.get("/ping", (req, res) => {
  res.json({
    message: "Problem service is alive",
  });
});
app.listen(PORT, () => console.log(`Server started on port:${PORT}`));
