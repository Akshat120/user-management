const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.send({
    "working-root": true,
  });
});

module.exports = router;
