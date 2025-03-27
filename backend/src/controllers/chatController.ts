import { Request, Response } from 'express';
import { generateResponse } from '../services/geminiService';

export const chatWithCamila = async (req: Request, res: Response) => {
  try {
    const { message } = req.body;

    if (!message) {
      res.status(400).json({ error: 'El mensaje es requerido' });
      return;
    }

    const response = await generateResponse(message);
    res.json({ response });
  } catch (error) {
    console.error('Error chatWithCamila:', error);
    res.status(500).json({ error: 'Error al procesar la solicitud' });
  }
};
