import db from '../helpers/db'
const table = 'users'

interface MkUser{
    name: string;
    email: string;
    password: string;
}

interface Email {
  email: string
}

export const registerModel = async(data: MkUser) => {
    return (await db).execute(`INSERT INTO ${table} (name, email, password) VALUES (?,?,?)`,
    [data.name, data.email, data.password])
}
export const checkEmailModel = async(email: Email) => {
    return (await db).execute(`SELECT users.id ,users.email, users.name FROM ${table} WHERE users.email = ?`,
    [email])
}