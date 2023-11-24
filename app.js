const express = require("express");
const router = require("./router.js");
const path = require("path");
const app = express();

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.use("/", router);

app.listen(3000, () => {
  console.log("Server Started!");
});
