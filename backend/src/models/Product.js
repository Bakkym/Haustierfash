import { Schema, model } from "mongoose";

// product schema
const ProductSchema = new Schema({
  name: {type: String, required: true},
  description: {type: String},
  image_url: {type: String, required: true},
  price: {type: Number, required: true},
  size: {type: String, required: true},
  category: {
    ref: "Category",
   type: Schema.Types.ObjectId,
   required: true
   },
},{
  timestamps: true,
  versionKey: false
}
);

export default model("Product", ProductSchema);

