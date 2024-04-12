const UserModel = require("../users/UserModel");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

const register = async (name, email, phone, password) => {
  try {
    const salt = await bcrypt.genSalt(10);
    const hash = await bcrypt.hash(password, salt);

    const user = new UserModel({
      name,
      email,
      phone,
      password: hash,
    });
    await user.save();

    return user;
  } catch (error) {
    throw error;
  }
};

const login = async (email, password) => {
  try {
    const user = await UserModel.findOne({ email });

    if (user && bcrypt.compareSync(password, user.password)) {
      return user;
    }
    return null;
  } catch (error) {
    throw error;
  }
};

module.exports = { register, login };
