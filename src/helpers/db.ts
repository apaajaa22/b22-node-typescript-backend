import mysql from 'mysql2/promise'
import dotenv from 'dotenv'
dotenv.config()

const connection = mysql.createConnection({
  host: process.env.DB_HOST,
  database: process.env.DB_NAME,
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
})

export default connection
