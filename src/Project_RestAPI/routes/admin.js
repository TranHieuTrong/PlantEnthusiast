var express = require("express");
var router = express.Router();
const cors = require("cors");
const AdminController = require("./../module/admin/AdminController");
router.use(cors());

router.get("/login", function (req, res) {
  res.render("login");
});

router.post("/loginProcess", async (req, res) => {
  try {
    const { username, password } = req.body;
    const admin = await AdminController.login(username, password);
    if (admin) {
      res.render("index", { msg: "Đăng nhập thành công" });
    } else {
      res.render("login", { msg: "Đăng nhập thất bại" });
    }
  } catch (error) {
    console.log(error);
  }
});
router.post("/api/login", async (req, res) => {
  try {
    const { username, password } = req.body;
    const admin = await AdminController.login(username, password);
    if (admin) {
      res.status(200).json(admin);
    } else {
      res.status(401).send("Tên người dùng hoặc mật khẩu không chính xác");
    }
  } catch (error) {
    console.error("Lỗi khi xử lý đăng nhập:", error);
    res.status(500).send("Đã xảy ra lỗi khi đăng nhập");
  }
});



router.post("/api/addnew", async (req, res) => {
  try {
    const { username, password } = req.body;
    const admin = await AdminController.insert(username, password);
    res.json(admin);
  } catch (error) {
    console.log(error);
  }
});

module.exports = router;
