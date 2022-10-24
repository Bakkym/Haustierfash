import Product from "../models/Product.js";

export const getAllProducts = async (req, res) => {
  const products = await Product.find()
  res.json(products)
};

export const newProduct = async (req, res) => {

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


export const getOneProduct = async (req, res) => {
  const product = await Product.findById(req.params.productId)
  res.status(200).json(product)

};

export const getProductByCategory = async (req, res) => {
  try {
    const products = await Product.find({"category":req.params.category})
    if (products.length === 0)res.json('Category is empty or does not exist')

    res.json(products)
  } catch (error) {
    res.status(500).error('Error Ocurred')
    
  }

}

export const updateProduct = async (req, res) => {
  const updatedProduct = await Product.findByIdAndUpdate(req.params.productId, req.body,{
    new: true
  });
  res.status(200).json(updatedProduct);
};

export const deleteProduct = async (req, res) => {
  await Product.findByIdAndDelete(req.params.productId);
  res.status(204).json();
};



