import { Router } from 'express'
import { getAllCategories, getCategory, createCategory, updateCategory, deleteCategory } from '../controllers/category.controller.js'
import { checkCategoryNameAvailable, checkCategoryExist } from '../middlewares/category.js'
import {verifyToken, isAdmin, isModerator} from '../middlewares/authJwt.js'

const router = Router()

router.get('/', getAllCategories)
router.get('/:category_name', getCategory)
router.post('/', [verifyToken,isModerator,checkCategoryNameAvailable], createCategory)
router.put('/', [verifyToken,isAdmin,checkCategoryExist], updateCategory)
router.delete('/', [verifyToken,isAdmin,checkCategoryExist], deleteCategory)

export default router