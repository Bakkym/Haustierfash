const Product = require("../models/Products");

const getAllProducts = async (req, res) => {
  const products = await Product.find()
  res.json(products)
};

const newProduct = async (req, res) => {

      //create new product using Product model
      const { name, description, image_url, price, size, category } = req.body;

      const newProduct = new Product({
        name,
        description,
        image_url,
        price,
        size,
        category,
      });

      //save this object to db
      const productSaved = await newProduct.save()
      res.status(201).json(productSaved);
    }


const getOneProduct = async (req, res) => {
  const product = await Product.findById(req.params.productId)
  res.status(200).json(product)

};

const updateProduct = async (req, res) => {
  const updatedProduct = await Product.findByIdAndUpdate(req.params.productId, req.body,{
    new: true
  });
  res.status(200).json(updatedProduct);
};

const deleteProduct = async (req, res) => {
  await Product.findByIdAndDelete(req.params.productId);
  res.status(204).json();
};


module.exports = {
  getAllProducts,
  newProduct,
  getOneProduct,
  updateProduct,
  deleteProduct,
};
