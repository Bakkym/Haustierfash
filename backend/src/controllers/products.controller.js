import Category from "../models/Category.js";
import Product from "../models/Product.js";

export const getAllProducts = async (req, res) => {
  try {
    let cat = req.query.cat
    if (cat) {
      let category = await Category.findOne({ name: cat })

      const getProductsByCategory = await Product.find({ category: category.id })
      res.json(getProductsByCategory)
    }
    else {
      const products = await Product.find().populate('category')
      res.json(products)

    }
  } catch (error) {
    res.status(500).error(error)

  }


};

export const newProduct = async (req, res) => {

  //create new product using Product model
  const { name, description, image_url, price, size, category } = req.body;

  const getCategory = await Category.findOne({ name: category })




  const newProduct = new Product({
    name,
    description,
    image_url,
    price,
    size,
  });

  newProduct.category = getCategory.id

  //save this object to db
  const productSaved = await newProduct.save()
  res.status(201).json(productSaved);
}


export const getOneProduct = async (req, res) => {
  const product = await Product.findById(req.params.productId).populate('category')
  res.status(200).json(product)

};



export const updateProduct = async (req, res) => {
  const updatedProduct = await Product.findByIdAndUpdate(req.params.productId, req.body, {
    new: true
  }).populate('category');
  res.status(200).json(updatedProduct);
};

export const deleteProduct = async (req, res) => {
  await Product.findByIdAndDelete(req.params.productId);
  res.status(204).json();
};



