import User from '../models/User.js'


 export const getWishlistByUserId = async (req, res) => {
    try {
        const user = await User.findById(req.params.user_id).populate('wishlist') // Populate: Traer los datos de la relación
        if(user.wishlist.length > 0){
            res.json(user.wishlist)
        } else {

            res.json('wishlist empty')
        }
    } catch (error) {
        res.status(500).error(error)
        
    }

}

export const addProductToWishlist = async (req, res) => {
    try {

        await User.findByIdAndUpdate(req.body.user_id,
            { $push: { wishlist: req.body.product_id } },
        )

        const user = await User.findById(req.body.user_id).populate('wishlist') // Populate: Traer los datos de la relación
        if(user.shoppingCart.length > 0){
            res.json(user.shoppingCart)
        }else{
            res.json("Cart empty")
        }

        res.json('Product added')
    } catch (error) {
        res.status(500).error(error)

    }


}
export const removeProductFromWishlist = async (req, res) => {
    try {

        await User.findByIdAndUpdate(req.body.user_id,
            { $pull: { wishlist: req.body.product_id } },
        )
        res.json('Product removed')
    } catch (error) {
        res.status(500).error(error)

    }
}

