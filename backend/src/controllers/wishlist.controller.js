import Wishlist from '../models/Wishlist.js'


export const getWishlistByUserId = async (req, res) => {
    const wishlist = await Wishlist.findOne({ user: req.params.user_id })
    res.json(wishlist.products)
}

export const addProductToWishlist = async (req, res) => {
    try {

        await Wishlist.findOneAndUpdate(req.body.user_id,
            { $push: { 'products': req.body.product_id } }
        )
        res.json('Product added')
    } catch (error) {
        res.status(500).error(error)

    }


}
export const removeProductFromWishlist = async (req, res) => {
    res.json('Product removed from the wishlist')
}

