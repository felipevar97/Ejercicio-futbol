const express = require("express");

var router = express.Router();

router.get("/", async (_req, res) => {
  res.render("pages/index");
});

module.exports = router;
