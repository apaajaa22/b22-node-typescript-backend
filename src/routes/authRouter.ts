import { Router } from 'express';
import { checkSchema } from 'express-validator';
import { login, register, generatePasswordCode, changeForgotPassword } from '../controller/auth.controller';
import forgotPassword from '../helpers/validationSchema/forgotPassword';
import loginShema from '../helpers/validationSchema/login';
import registerShema from '../helpers/validationSchema/register';
import changeForgotPasswordSchema from '../helpers/validationSchema/changeForgotPassword';

const auth = Router()

auth.post('/login',checkSchema(loginShema), login)
auth.post('/register',checkSchema(registerShema), register)
auth.post('/forgot-password',checkSchema(forgotPassword), generatePasswordCode)
auth.patch('/forgot-change-password', checkSchema(changeForgotPasswordSchema), changeForgotPassword)

export default auth