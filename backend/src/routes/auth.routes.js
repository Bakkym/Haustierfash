import { Router } from 'express';
const router = Router();
const authCtrl = require("../controllers/auth.controller");
const { verifySignUp } = require("../middlewares");

router.post('/signup', [verifySignUp.checkDuplicateUsernameOrEmail, verifySignUp.checkRolesExisted], authCtrl.signUp);
router.post('/signin', authCtrl.signIn);

module.exports = router;