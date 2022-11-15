import Category from '../models/Category.js'


export const getAllCategories = async (req, res) => {
    const allCategories = await Category.find()
    res.json(allCategories)

}

export const getCategory = async (req, res) => {
    const category = await Category.findOne({ name: req.params.category_name })
    res.json(category)
}

export const createCategory = async (req, res) => {
    try {
        const newCategory = await new Category({
            name: req.body.category_name,
            description: req.body.category_description,
            image_url: req.body.image_url
        }).save()

        res.json(newCategory)

    } catch (error) {
        res.status(500).json('Error ocurred')

    }
}

export const updateCategory = async (req, res) => {
    await Category.findOneAndUpdate({ name: req.body.category_name },
        {
            description: req.body.category_description,
            image_url: req.body.image_url
        })

    res.json('Category Updated')



}

export const deleteCategory = async (req, res) => {
    await Category.findOneAndDelete({name: req.body.category_name})

    res.json('Category Deleted')
}