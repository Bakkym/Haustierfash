import Product from "../models/Product"

export const getWishlistByUserId = async (req, res) => {
    res.json('Wishlist by user')
}

export const addProductToWishlist = async (req, res) => {
    res.json('product added')
}
export const removeProductFromWishlist = async (req, res) => {
    res.json('Product removed from the wishlist')
}

