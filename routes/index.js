var express = require("express");
var router = express.Router();

/* GET home page. */
router.get("/getUserInfo", function (req, res, next) {
  res.json({ code: "2001" });
});

router.get("/dev-api/getUserInfo", function (req, res, next) {
  res.json({ code: "201" });
});
router.get("/api/getUserInfo", function (req, res, next) {
  res.json({ code: "20221" });
});

module.exports = router;
