const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const billSchema = new Schema({
  orderDate: { type: Date, default: Date.now() },
  userId: { type: ObjectId, ref: "user" },
  products: [
    {
      productId: { type: ObjectId, ref: "product" },
      qty: Number,
    },
  ],
  status: String,
});

module.exports = mongoose.model("bill", billSchema);
