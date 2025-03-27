import { Request, Response } from 'express';
import { authService } from '../services/authService';

export const authController = {

  async register(req: Request, res: Response) {
    try {
      const { user_name, email, password } = req.body;
      const result = await authService.register(user_name, email, password);
      res.status(201).json(result);
    } catch (error) {
      console.error('Error in register:', error); // Para depuración
      const err = error as Error;
      res
        .status(400)
        .json({ error: err.message || 'Error registering user' });
    }
  },

 
  async login(req: Request, res: Response) {
    try {
      const { email, password } = req.body;
      const result = await authService.login(email, password);
      res.status(200).json(result);
    } catch (error) {
      console.error('Login error:', error); 
      const err = error as Error;
      res.status(401).json({ error: err.message || 'Error logging in' });
    }
  }
};
