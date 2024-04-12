const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const CategoryShema = new Schema({
  name: {
    type: String,
    required: true,
  },
  parentId: {
    type: ObjectId,
    ref: "Category",
  },
});
module.exports = mongoose.model("Category", CategoryShema);
