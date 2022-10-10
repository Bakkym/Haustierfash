const mongoose = require("mongoose");

// product schema
const ProductSchema = new mongoose.Schema({
  name: {type: String, required: true},
  description: {type: String, required: true},
  image_url: {type: String, required: true},
  price: {type: Number, required: true},
  size: {type: String, required: true},
  quantity: {type: Number, required: true},
  category: {type: String, required: true},
  created_at: {type: Date, default: Date.now},
});

const Product = mongoose.model("Products", ProductSchema);

module.exports = Product;
