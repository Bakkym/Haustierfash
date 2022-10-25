import User from '../models/User.js'


 export const getShoppingCartByUserId = async (req, res) => {
    try {
        const user = await User.findById(req.params.user_id).populate('shoppingCart') // Populate: Traer los datos de la relación
        res.json(user.shoppingCart)
    } catch (error) {
        res.status(500).error(error)
        
    }

}

export const addProductToShoppingCart = async (req, res) => {
    try {

        await User.findOneAndUpdate(req.body.user_id,
            { $push: { shoppingCart: req.body.product_id } },
        )
        res.json('Product added')
    } catch (error) {
        res.status(500).error(error)

    }


}
export const removeProductFromShoppingCart = async (req, res) => {
    try {

        await User.findOneAndUpdate(req.body.user_id,
            { $pull: { shoppingCart: req.body.product_id } },
        )
        res.json('Product removed')
    } catch (error) {
        res.status(500).error(error)

    }
}

