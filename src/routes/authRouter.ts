import { Router } from 'express';
import { login, register, generatePasswordCode, changeForgotPassword } from '../controller/auth.controller';

const auth = Router()

auth.post('/login', login)
auth.post('/register', register)
auth.post('/forgot-password', generatePasswordCode)
auth.patch('/forgot-change-password', changeForgotPassword)

export default auth