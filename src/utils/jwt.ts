import jwt from 'jsonwebtoken'
import Types from 'mongoose'

export type UserPayload = {
  id: string;
}

export const generateJWT = (payload: UserPayload) => {
  if (!process.env.JWT_SECRET) {
    throw new Error('JWT_SECRET no definido');
  }
  const token = jwt.sign(payload, process.env.JWT_SECRET, {
    expiresIn: '180d',
  });
  return token;
};