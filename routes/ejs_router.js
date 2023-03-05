const express = require("express");
const router = express();

/* 테스트용 ejs */
router.get("/", (req, res) => {
  res.render("index")
})

module.exports = router;