import { Schema, model } from "mongoose";

// product schema
const ProductSchema = new Schema({
  name: { type: String, required: true },
  description: { type: String },
  image_url: { type: String, required: true },
  images_url: [{ type: String }],
  price: { type: Number, required: true },
  size: { type: String, required: true },
  category: {
    ref: "Category",
    type: Schema.Types.ObjectId,
    required: true
  },
  reviews: [
    {
      username: {
        ref: "User",
        type: Schema.Types.ObjectId
      },
      title: { type: String, required: true },
      comment: { type: String, required: true },
      raiting: { type: String, required: true },

    }
  ]
}, {
  timestamps: true,
  versionKey: false
}
);

export default model("Product", ProductSchema);

