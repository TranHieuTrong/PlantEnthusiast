const BillModel = require("../bill/BillModel");
const ProductModel = require("../Products/ProductModel");
const getAll = async () => {
  try {
    const billModel = await BillModel.find();
    return billModel;
  } catch (error) {
    console.log(error);
    throw error;
  }
};
const createBill = async ({ userId, products }) => {
  const newBill = new BillModel({ userId, products });
  await newBill.save();
  return newBill;
};
const getProductByUserId = async (userId) => {
  try {
    const bills = await BillModel.find({ userId });
    console.log(bills);
    let products = [];
    for (let i = 0; i < bills.length; i++) {
      const bill = bills[i];
      const productsInBill = await ProductModel.findById({
        _id: bill.productId,
      });

      products = products.concat(productsInBill);
    }
    console.log(products);
    return products;
  } catch (error) {
    console.log(error);
    throw error;
  }
};
module.exports = { getAll, createBill, getProductByUserId };
