import { Schema, model } from "mongoose";

const wishlistSchema = new Schema(
    {
        user: {
            ref: "User",
            type: Schema.Types.ObjectId,
        },

        products: [
            {
                ref: "Product",
                type: Schema.Types.ObjectId,
            },
        ],
    },
    {
        timestamps: true,
        versionKey: false,
    }
);

export default model("Wishlist", wishlistSchema);
