import { Router } from 'express'
const router = Router()
const userController = require('../controllers/user.controller')
import { authJwt, verifySignUp } from '../middlewares'

router.post('/',[
  authJwt.verifyToken,
  authJwt.isAdmin,
  verifySignUp.checkRolesExisted
], userController.createUser)


module.exports = router