const express = require("express");
const router = require("./router.js");
const app = express();

app.set("view engine", "ejs");

app.use("/", router);

app.listen(3000, () => {
  console.log("Server Started!");
});
