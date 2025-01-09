const mongoose = require("mongoose");
const { restart } = require("nodemon");

const productSchema = new mongoose.Schema({
  restaurant_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Restaurant",
  },
  foodImg: {
    type: String,
    required: true,
  },
  foodName: {
    type: String,
    required: true,
  },
  foodPrice: {
    type: Number,
    required: true,
  },
  foodDescription: {
    type: String,
    required: true,
  },
  rating: {
    type: Number,
  },
});

const ProductModel = mongoose.model("Product", productSchema);
module.exports = ProductModel;
