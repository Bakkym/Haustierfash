import Category from '../models/Category.js'

export const checkCategoryNameAvailable = async (req, res, next) => {
    const exist = await Category.findOne({ name: req.body.category_name })

    if (exist) return res.status(400).json({ message: 'Category already exist' })

    next()

}

export const checkCategoryExist = async (req, res, next) => {
    const exist = await Category.findOne({ name: req.body.category_name })

    if (!exist) return res.status(400).json({ message: 'Category does not exist' })

    next()
}

export const checkCategoryExistByGet = async (req, res, next) => {
    if (req.query.cat) {
        const exist = await Category.findOne({ name: req.query.cat })
        if (!exist) return res.status(400).json({ message: 'Category not found' })

    }
    next()
}

export const checkCategoryExistForProduct = async (req, res, next) => {
    const exist = await Category.findOne({ name: req.body.category })

    if (!exist) return res.status(400).json({ message: 'Category does not exist' })

    next()
}

