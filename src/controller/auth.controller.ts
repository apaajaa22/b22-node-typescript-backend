import { Request, Response } from 'express'
import response from '../helpers/response'
import {
  checkEmailModel,
  generateCodePassword,
  registerModel,
  changeForgotPasswordModel,
  changeCodeToNull,
  getProfile,
} from '../model/users.model'
import bcrypt from 'bcrypt'
import dotenv from 'dotenv'
import jwt from 'jsonwebtoken'
import { RowDataPacket } from 'mysql2'
dotenv.config()
const { APP_KEY } = process.env

export const login = async (req: Request, res: Response) => {
  const { email, password } = req.body
  const findEmail: any[] = await checkEmailModel(email)
  const checkEmail = findEmail[0][0]
  if (!checkEmail) {
    return response(res, 'Email not found', checkEmail)
  } else {
    const compare = await bcrypt.compare(password, checkEmail.password)
    if (compare) {
      const payload = { id: checkEmail.id, email: checkEmail.email }
      const token = jwt.sign(payload, APP_KEY || '', { expiresIn: '2 day' })
      return response(res, 'Login success', { token }, 200)
    } else {
      return response(res, 'Wrong email or password', null, 400)
    }
  }
}

export const register = async (req: Request, res: Response) => {
  const data = req.body
  const findEmail: any[] = await checkEmailModel(data.email)
  const checkEmail = findEmail[0][0]
  if (checkEmail) {
    return response(res, 'email already in use')
  } else {
    data.password = await bcrypt.hash(data.password, await bcrypt.genSalt())
    await registerModel(data)
    return response(res, 'Register Success')
  }
}

export const generatePasswordCode = async (req: Request, res: Response) => {
  const data = req.body
  const findEmail: any[] = await checkEmailModel(data.email)
  const checkEmail = findEmail[0][0]
  if (!checkEmail) {
    return response(res, 'email not found')
  } else {
    const code = Math.floor(Math.random() * 9999)
    const form: any = {
      code,
      email: data.email,
    }
    await generateCodePassword(form)
    return response(res, `forgot password code is ${code}`)
  }
}

export const changeForgotPassword = async (req: Request, res: Response) => {
  const data = req.body
  data.password = await bcrypt.hash(data.password, await bcrypt.genSalt())
  const form = {
    password: data.password,
    code: data.code,
    email: data.email,
  }
  const results: any = await changeForgotPasswordModel(form)
  if (results[0].affectedRows > 0) {
    await changeCodeToNull(form)
    return response(res, `change password success`)
  }
  return response(res, `invalid forgot password code or email`, null, 400)
}

export const getProfileLogin = async (req: Request, res: Response) => {
  const { id } = req.authUser
  const results:any = await getProfile(id)
  const user = results[0][0]
  return response(res, 'Data User', user, 200)
}
