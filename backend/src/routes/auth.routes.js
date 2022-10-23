import { Router } from 'express';
const router = Router();
import { signIn, signUp } from '../controllers/auth.controller.js';
import { checkDuplicateUsernameOrEmail, checkRolesExisted } from "../middlewares/verifySignup.js";

import {corsOptions} from '../middlewares/authJwt'

router.post('/signup', [checkDuplicateUsernameOrEmail, checkRolesExisted], signUp);
router.post('/signin', signIn);

export default router