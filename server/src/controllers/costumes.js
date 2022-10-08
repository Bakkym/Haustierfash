
const Product = require("../models/products");


const getAllCostumes = (req, res) => {
  Product.find({}, (err, data) => {
    if (err){
      return
    }
    return res.json(data)
  })
};

const newCostume = (req, res) => {

  //check if the costume already exists in db
  Product.findOne({ name: req.body.name }, (err, data) => {

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

const getOneCostume = (req, res) => {
  let _id = req.params.id;
  Product.findOne({ _id:_id }, (err, data) => {
    if (err || !data) {
      return res.json({ message: "Costume not found" });
    }
    else return res.json(data);
  })
};

const updateCostume = (req, res) => {
  console.log(req.body);
  let _id = req.params.id;
    Product.findByIdAndUpdate({_id:_id},{description: req.body.description}, (err, data) => {
      if (err || !data) {
        return res.json({ message: "Costume not found" });
      }
      else return res.json({message: "Costume updated"});
    })
};




const deleteCostume = (req, res) => {
  let _id = req.params.id;
  Product.deleteOne({ _id:_id }, (err, data) => {
    if (err || !data) {
      return res.json({ message: "Costume not found" });
    }
    else return res.json({message: "Costume deleted"});
  }
  )


};

module.exports = {
  getAllCostumes,
  newCostume,
  getOneCostume,
  updateCostume,
  deleteCostume,
};
