import jwt from 'jsonwebtoken'
import { Request, Response, NextFunction } from 'express'
import response from '../helpers/response'
import dotenv from 'dotenv'
const {APP_KEY} = process.env
dotenv.config()

const auth = (req:Request, res:Response, next:NextFunction) => {
  if (req.headers?.authorization) {
    if (req.headers.authorization.startsWith('Bearer')) {
      try {
        const token = req.headers.authorization.slice(7)
        const user = jwt.verify(token, APP_KEY || '')
        req.authUser = user
        next()
      } catch (err) {
        return response(res, 'You must be loggin first', null, 401)
      }
    }
  } else {
    return response(res, 'Auth token is needed!', null, 401)
  }
}

export default auth