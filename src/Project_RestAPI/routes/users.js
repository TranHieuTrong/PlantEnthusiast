var express = require("express");
var router = express.Router();
const UserController = require("../module/users/UserController");
const UserModel = require("../module/users/UserModel");

router.post("/login", async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await UserController.login(email, password);
    if (user) {
      return res.json({ user });
    } else {
      return res
        .status(401)
        .json({ message: "Email hoặc mật khẩu không hợp lệ" });
    }
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "ERROR" });
  }
});

router.post("/register", async (req, res) => {
  const { name, email, password, phone } = req.body;

  try {
    const checkUser = await UserModel.findOne({ email });
    if (checkUser) {
      return res.status(400).json({ message: "Email đã được sử dụng" });
    }
    const user = await UserController.register(name, email, phone, password);
    return res.status(201).json({ user });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "ERROR" });
  }
});

module.exports = router;
