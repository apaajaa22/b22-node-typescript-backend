import { Router } from 'express';
import auth from './authRouter';
import user from './userRouter';

const router = Router()

router.use('/auth', auth)
router.use('/user', user)

export default router