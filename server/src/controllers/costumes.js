const Product = require("../models/products");
const Costume = require("../models/products");


const getAllCostumes = (req, res, next) => {
  res.json({ message: "Get all costumes" });
};

const newCostume = (req, res) => {
  
  //check if the costume already exists in db
  Costume.findOne({ name: req.body.name }, (err, data) => {

    //if costume not in db, add it
    if (!data){
      //create new costume object using the products model and req.body
      const newCostume = new Product({
        name: req.body.name,
        description: req.body.description,
        image_url: req.body.image_url,
        price: req.body.price,
        size: req.body.size,
        quantity: req.body.quantity,
        category: req.body.category,
      });

      //save this object to db
      newCostume.save((err, data) => {
        if(err) return res.json({Error: err})
        return res.json({message: "New costume added", data: data})
      })
    // If there's an error or the costume is in db, return a message
    } else {
      if(err) return res.json(`Something went wrong: ${err}`)
      return res.json({message: "This costume already exists"})
    }
  })
    
};

const getOneCostume = (req, res, next) => {
  res.json({ message: "Get one costume" });
};

const updateCostume = (req, res, next) => {
  res.json({ message: "Update one costume" });
};

const deleteCostume = (req, res, next) => {
  res.json({ message: "Delete one costume" });
};

module.exports = {
  getAllCostumes,
  newCostume,
  getOneCostume,
  updateCostume,
  deleteCostume,
};
