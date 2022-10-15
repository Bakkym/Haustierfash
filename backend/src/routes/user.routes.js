import { Router } from 'express'
import { createUser, getUsers, getUser, updateUser } from '../controllers/user.controller.js'
import { isAdmin,verifyToken } from '../middlewares/authJwt.js'
import { checkDuplicateUsernameOrEmail, checkRolesExisted } from '../middlewares/verifySignup.js'
const router = Router()

router.post('/',[
  verifyToken,
  isAdmin,
  checkRolesExisted,
  checkDuplicateUsernameOrEmail
], createUser)

router.get('/',[
  verifyToken,
  isAdmin,
  checkRolesExisted
], getUsers)

router.get('/:userId',getUser)

router.put('/:userId',updateUser)


export default router