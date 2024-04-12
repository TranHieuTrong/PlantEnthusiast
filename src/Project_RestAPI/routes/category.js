const express = require("express");
const router = express.Router();
var CategoryController = require("../module/Categories/CategoryController");

router.post("/add", async function (req, res, next) {
  try {
    const { name, parentId } = req.body;

    if (parentId == "") {
      category = await CategoryController.insert(name.null);
    } else {
      category = await CategoryController.insert(name, parentId);
    }
    res.status(200).json(category);
    console.log({ name, parentId });
  } catch (err) {}
});
router.get("/all", async function (req, res, next) {
  try {
    const category = await CategoryController.getAll();
    res.status(200).json(category);
  } catch (error) {
    console.error(err);
    res.status(500).json({ message: "ERROR" });
  }
});
module.exports = router;
