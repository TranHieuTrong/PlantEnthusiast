const ProductModel = require("../Products/ProductModel");

const insert = async (productData) => {
  try {
    const newProduct = new ProductModel(productData);
    await newProduct.save();
    return newProduct;
  } catch (error) {
    console.log(error);
    throw error;
  }
};
const getAll = async () => {
  try {
    const product = await ProductModel.find();
    return product;
  } catch (error) {
    console.log(error);
    throw error;
  }
};
const update = async (name, origin, price, status, size) => {
  try {
    const updatedProduct = await ProductModel.findByIdAndUpdate(
      productID,
      { name, origin, price, status, size },
      { new: true }
    );
    return updatedProduct;
  } catch (error) {
    console.log(error);
    throw error;
  }
};
const remove = async (productID) => {
  try {
    await ProductModel.findByIdAndRemove(productID);
    return { message: "Xóa sản phẩm thành công" };
  } catch (error) {
    console.log(error);
    throw error;
  }
};
const searchByName = async (name) => {
  try {
    const products = await ProductModel.find({
      name: { $regex: name, $options: "i" },
    });
    return products;
  } catch (error) {
    console.log(error);
    throw error;
  }
};
module.exports = { insert, getAll, update, remove, searchByName };
