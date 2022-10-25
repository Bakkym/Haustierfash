import User from '../models/User.js'


 export const getShoppingCarByUserId = async (req, res) => {
    try {
        const user = await User.findById(req.params.user_id).populate('shoppingCar') // Populate: Traer los datos de la relación
        res.json(user.shoppingCar)
    } catch (error) {
        res.status(500).error(error)
        
    }

}

export const addProductToShoppingCar = async (req, res) => {
    try {

        await User.findOneAndUpdate(req.body.user_id,
            { $push: { shoppingCar: req.body.product_id } },
        )
        res.json('Product added')
    } catch (error) {
        res.status(500).error(error)

    }


}
export const removeProductFromShoppingCar = async (req, res) => {
    try {

        await User.findOneAndUpdate(req.body.user_id,
            { $pull: { shoppingCar: req.body.product_id } },
        )
        res.json('Product removed')
    } catch (error) {
        res.status(500).error(error)

    }
}

