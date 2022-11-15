import { Router } from 'express'
import { getRoles, createRol, updateRol, deleteRol } from '../controllers/role.controller.js'
import { verifyToken, isAdmin } from '../middlewares/authJwt.js'

const router = Router()

router.get('/',[verifyToken, isAdmin], getRoles)
router.post('/', [verifyToken, isAdmin], createRol)
router.put('/', [verifyToken, isAdmin], updateRol)
router.delete('/', [verifyToken, isAdmin], deleteRol)

export default router