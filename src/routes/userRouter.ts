import { Router } from 'express';
import { getProfileLogin } from '../controller/auth.controller';
import auth from '../middlewares/auth'

const user = Router()

user.get('/login',auth, getProfileLogin)

export default user