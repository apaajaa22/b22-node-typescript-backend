import { Router } from 'express';
import auth from './authRouter';

const router = Router()

router.use('/auth', auth)

export default router