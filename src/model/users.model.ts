import db from '../helpers/db'
const table = 'users'

interface MkUser{
    name: string;
    email: string;
    password?: string;
}

interface Email {
  email: string
}

interface GeneratePass {
  email: string;
  code: string
}

interface ForgotPassword {
  password: string;
  code: string
  email?: string
}

export const registerModel = async(data: MkUser) => {
    return (await db).execute(`INSERT INTO ${table} (name, email, password) VALUES (?,?,?)`,
    [data.name, data.email, data.password])
}
export const checkEmailModel = async(email: Email) => {
    return (await db).execute(`SELECT users.id ,users.email, users.password, users.name FROM ${table} WHERE users.email = ?`,
    [email])
}
export const generateCodePassword = async (data:GeneratePass ) => {
  return (await db).execute(`UPDATE ${table} set users.codePassword= ? where users.email=?`, [data.code, data.email])
}
export const changeForgotPasswordModel = async (data:ForgotPassword ) => {
  return (await db).execute(`UPDATE ${table} set users.password= ? where users.codePassword=? AND users.email=?`, [data.password, data.code, data.email])
}

export const changeCodeToNull = async (data:ForgotPassword ) => {
  return (await db).execute(`UPDATE ${table} set users.codePassword=? where users.codePassword=?`, [null, data.code])
}
export const getProfile = async (id:number ) => {
  return (await db).execute(`SELECT users.id, users.email, users.name FROM ${table} WHERE users.id = ?`, [id])
}