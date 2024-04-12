const AdminModel = require("./AdminModel");
// const UserModel = require("./../users/UserModel");

const insert = async (username, password) => {
  try {
    const admin = new AdminModel({ username, password });
    await admin.save();
    return admin;
  } catch (error) {
    console.log(error);
  }
};
const login = async (username, password) => {
  try {
    const admin = await AdminModel.findOne({
      username: username,
      password: password,
    });
    if (admin) {
      return admin;
    }
    return admin;
  } catch (error) {
    console.log(error);
  }
};

const changePassword = async (id, newPassword) => {};

module.exports = { login, insert };
