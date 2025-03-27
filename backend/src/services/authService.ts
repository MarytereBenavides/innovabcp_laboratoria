import prisma from '../config/database';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
import { Role } from '@generated/prisma';

dotenv.config();

const SECRET_KEY = process.env.JWT_SECRET;

if (!SECRET_KEY) {
  throw new Error('JWT_SECRET is not defined in the .env file.');
}

export const authService = {
  async register(user_name: string, email: string, password: string, role: Role = 'PLAYER') {
    const existingUser = await prisma.user.findUnique({ where: { email } });
    if (existingUser) throw new Error('Mail is already registered');

    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = await prisma.user.create({
      data: { user_name, email, password: hashedPassword, role: role }
    });

    return {
      message: 'User successfully registered',
      user_id: newUser.user_id
    };
  },

  async login(email: string, password: string) {
    const user = await prisma.user.findUnique({ where: { email } });
    if (!user) throw new Error('User not found');

    const isValidPassword = await bcrypt.compare(password, user.password);
    if (!isValidPassword) throw new Error('Wrong password');

    const token = jwt.sign(
      { user_id: user.user_id, role: user.role },
      SECRET_KEY,
      {
        expiresIn: '2h'
      }
    );

    return { message: 'Successful login', token, user_id: user.user_id };
  },

  verifyToken(token: string) {
    try {
      return jwt.verify(token, SECRET_KEY);
    } catch (error) {
      throw new Error('Token invalid or expired');
    }
  }
};
