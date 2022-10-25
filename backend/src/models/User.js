import { Schema, model } from "mongoose";
import bcrypt from 'bcryptjs'

const userSchema = new Schema(
  {
    username: {
      type: String,
      unique: true,
    },
    email: {
      type: String,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    lastname: {
      type: String,
      required: true,
    },
    address: {
      type: String,
      required: true,
    },
    phone: {
      type: String,
      required: true,
    },

    roles: [
      {
        ref: "Role", // Crear una relación con el modelo Role
        type: Schema.Types.ObjectId, //Guardar una relación atravez del _id
      },
    ],

    wishlist: [
      {
        ref: "Product",
        type: Schema.Types.ObjectId,
      },
    ],

    shoppingCar: [
      {
        ref: "Product",
        type: Schema.Types.ObjectId
      }
    ]





  },
  {
    timestamps: true,
    versionKey: false,
  }
);

userSchema.statics.hashPassword = async (password) => {
  try {
    const salt = await bcrypt.genSalt(10);
    return await bcrypt.hash(password, salt);
  } catch (error) {
    console.log(error);
  }
};

userSchema.statics.comparePassword = async (password, receivedPassword) => {
  return await bcrypt.compare(password, receivedPassword);
};

export default model("User", userSchema);
