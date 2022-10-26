import Role from "../models/Role.js";
import Category from '../models/Category.js'

export const createRoles = async () => {
  const count = await Role.estimatedDocumentCount(); // Counts roles
  try {
    if (count > 0) return;

    const values = await Promise.all([
      // Ejecutar todas las promesas al mismo tiempo
      new Role({ name: "user" }).save(),
      new Role({ name: "moderator" }).save(),
      new Role({ name: "admin" }).save(),
    ]);

    console.log(values);
  } catch (error) {
    console.error(error);
  }
};

export const createCategories = async () => {
  const count = await Category.estimatedDocumentCount(); //count categories
  
  try {
    if (count > 0) return;
  
    const values = await Promise.all([
      new Category(
        {
          name: "kerchiefs",
          description: "kerchiefs category",
          image_url: "https://th.bing.com/th/id/OIP.2FYJmwws7NAxmahjflTO9AHaHa?pid=ImgDet&rs=1"
        }).save(),
  
      new Category(
        {
          name: "t-shirts",
          description: "t-shirts category",
          image_url: "https://i.etsystatic.com/34322913/r/il/6a5b77/3991968004/il_794xN.3991968004_edpi.jpg"
        }).save(),
  
      new Category(
        {
          name: "costumes",
          description: "costumes category",
          image_url: "https://i5.walmartimages.com/asr/0a382f39-7541-4a9a-9c0d-ab0d4c781925.e659661c020ecc0fb2b6a62c048f3600.jpeg"
        }).save(),
  
      new Category(
        {
          name: "accesories",
          description: "accesories category",
          image_url: "https://th.bing.com/th/id/OIP.dJCQezkyDk0btTxJZRT_cQHaHa?pid=ImgDet&rs=1"
        }).save()
    ])
    
    console.log(values)
  } catch (error) {
    console.log(error)
    
  }


}
