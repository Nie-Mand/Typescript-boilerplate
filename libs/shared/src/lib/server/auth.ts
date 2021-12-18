import * as jwt from 'jsonwebtoken'
import * as bcrypt from 'bcrypt'

export const createToken = payload =>
  jwt.sign(payload, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_EXPIRE_TIME,
  })

export const verifyToken = token => jwt.verify(token, process.env.JWT_SECRET)

export const hashPassword = password =>
  bcrypt.hash(password, Number(process.env.SALT))

export const verifyPassword = (password, hashed) =>
  bcrypt.compare(password, hashed)
