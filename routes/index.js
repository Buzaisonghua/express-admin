var express = require("express");
var router = express.Router();
const { login, userInfo, roles } = require("../data/login");

router.get("/", function (req, res, next) {
  res.json({ code: "20000", data: {}, msg: "可以的" });
});

/* GET home page. */
router.post("/login", function (req, res, next) {
  const { password, username, tokenName } = req.body;
  const data = login.find(
    (val) => val.password === password && username === val.username
  );
  if (!data) {
    res.json({
      code: "50001",
      msg: "账号或密码错误",
    });
  }
  res.json({ code: "20000", data: { accessToken: data.token } });
});

router.get("/getUserInfo", function (req, res, next) {
  const token = req.cookies["Admin-Token"];
  const data = userInfo[token];
  if (!data) {
    res.json({ code: "A0230", msg: "登录过期" });
  }
  res.json({ code: "20000", data: { ...data } });
});

router.post("/getUserRoutes", function (req, res, next) {
  const role = roles.find((val) => val.userId === req.body.userId);
  if (!role) {
    res.json({ code: "A0230", msg: "登录过期" });
  }
  res.json({ code: "20000", data: role });
});

module.exports = router;
