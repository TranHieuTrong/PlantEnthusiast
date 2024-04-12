const express = require("express");
const router = express.Router();
const Bill = require("../module/bill/BillController");

// tạo hóa đơn
router.post("/api/bill", async function (req, res, next) {
  try {
    const { userId, products } = req.body;
    const newBill = await BillController.createBill({
      userId,
      products,
    });
    res.status(201).json(newBill);
  } catch (error) {
    next(error);
  }
});

//lịch sử giao dịch http://localhost:3000/bill/api/getProductByUserId
router.post("/api/getProductByUserId", async function (req, res, next) {
  try {
    const { userId } = req.body;

    const products = await BillController.getProductByUserId(userId);
    res.status(201).json(products);
  } catch (error) {
    next(error);
  }
});

module.exports = router;
