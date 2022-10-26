import { Router } from 'express'
import { getAllCategories, getCategory, createCategory, updateCategory, deleteCategory } from '../controllers/category.controller.js'
import { checkCategoryNameAvailable, checkCategoryExist } from '../middlewares/category.js'

const router = Router()

router.get('/', getAllCategories)
router.get('/:category_name', getCategory)
router.post('/', checkCategoryNameAvailable, createCategory)
router.put('/', checkCategoryExist, updateCategory)
router.delete('/', checkCategoryExist, deleteCategory)

export default router