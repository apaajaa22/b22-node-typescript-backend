import { Request, Response } from 'express'
import response from '../helpers/response'
import { checkEmailModel, registerModel } from '../model/auth'
import bcrypt from 'bcrypt'
import dotenv from 'dotenv'
import jwt from 'jsonwebtoken'
dotenv.config()
const {APP_KEY} = process.env

export const login = async(req:Request,res:Response) => {
  const { email, password } = req.body
  const findEmail:any[] = await checkEmailModel(email)
  const checkEmail = findEmail[0][0]
  if (!checkEmail){
    return response(res,'Email not found', checkEmail)
  }else{
    const compare = await bcrypt.compare(password, checkEmail.password)
    if(compare){
      const payload = { id: checkEmail.id, email: checkEmail.email }
    const token = jwt.sign(payload, APP_KEY, { expiresIn: '2 day' })
    return response(res, 'Login success', { token }, 200)
    }else{
      return response(res, 'Wrong email or password', null , 400)
    }
  }
}

export const register = async (req:Request,res:Response) => {
  const data = req.body
  const findEmail:any[] = await checkEmailModel(data.email)
  const checkEmail = findEmail[0][0]
  if (checkEmail){
    return response(res,'email already in use')
  }else {
    data.password = await bcrypt.hash(data.password, await bcrypt.genSalt())
    await registerModel(data)
    return response(res,'Register Success')
  }
}