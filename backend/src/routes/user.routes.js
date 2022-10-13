import { Router } from 'express'
const router = Router()
const userController = require('../controllers/user.controller')
import { authJwt, verifySignUp } from '../middlewares'

router.post('/',[
  authJwt.verifyToken,
  authJwt.isAdmin,
  verifySignUp.checkRolesExisted
], userController.createUser)

router.get('/',[
  authJwt.verifyToken,
  authJwt.isAdmin,
  verifySignUp.checkRolesExisted
], userController.getUsers)

router.get('/:userId',userController.getUser)

router.put('/:userId',userController.updateUser)


module.exports = router