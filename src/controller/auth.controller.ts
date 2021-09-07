import { Request, Response } from 'express'
import response from '../helpers/response'
import { checkEmailModel, registerModel } from '../model/auth'
import bcrypt from 'bcrypt'

export const login = (req:Request,res:Response) => {
  const { email, password } = req.body
    return response(res,'Login Success')
}

export const register = async (req:Request,res:Response) => {
  const data = req.body
  const findEmail:any = await checkEmailModel(data.email)
  const checkEmail = findEmail[0][0]
  if (checkEmail){
    return response(res,'email already in use')
  }else {
    data.password = await bcrypt.hash(data.password, await bcrypt.genSalt())
    await registerModel(data)
    return response(res,'Register Success')
  }
}