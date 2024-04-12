const CategoryModel = require("./CategoryModel");

const getAll = async () => {
  try {
    const categories = await CategoryModel.find();
    return categories;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

const insert = async (name, parentId) => {
  try {
    const newCategory = new CategoryModel({ name, parentId });
    await newCategory.save();
    return newCategory;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

const getParent = async () => {
  try {
    const categories = await CategoryModel.find({ parentId: null });
    return categories;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

const getSub = async () => {
  try {
    const categories = await CategoryModel.find(parentId).populate(
      "parentId",
      "_id name"
    );
    return categories;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

const update = async (catId, name, parentId) => {
  try {
    const updatedCategory = await CategoryModel.findByIdAndUpdate(
      catId,
      { name, parentId },
      { new: true }
    );
    return updatedCategory;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

const remove = async (catId) => {
  try {
    await CategoryModel.findByIdAndRemove(catId);
    return { message: "Xóa danh mục thành công" };
  } catch (error) {
    console.log(error);
    throw error;
  }
};

module.exports = { getAll, getParent, getSub, insert, update, remove };
