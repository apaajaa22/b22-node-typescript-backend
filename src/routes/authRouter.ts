import { Router } from 'express';
import { login, register } from '../controller/auth.controller';

const auth = Router()

auth.get('/login', login)
auth.post('/register', register)

export default auth