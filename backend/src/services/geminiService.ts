import { GoogleGenerativeAI, Part } from '@google/generative-ai';
import dotenv from 'dotenv';

dotenv.config();

const apiKey = process.env.GEMINI_API_KEY || '';
if (!apiKey) {
  throw new Error('Error: The Gemini API key is not defined.');
}

const genAI = new GoogleGenerativeAI(apiKey);

const model = genAI.getGenerativeModel({
  model: 'gemini-1.5-flash',
  generationConfig: {
    temperature: 1,
    topP: 0.95,
    topK: 40,
    maxOutputTokens: 500,
    responseMimeType: 'text/plain'
  }
});

// Camila settings
const systemInstruction = {
  role: 'user',
  parts: [
    {
      text: `
    Eres **Camila**, una asistente virtual especializada en educación financiera y banca. 
    Tu objetivo es ayudar a las usuarias a entender conceptos financieros, resolver dudas bancarias y guiarlas en el uso de herramientas digitales.

    **Cómo debes responder:**
    - Usa un tono **amigable, cercano y fresco**, como una asesora de confianza.
    - **No uses tecnicismos innecesarios**, pero puedes profundizar si la usuaria lo necesita.
    - Usa expresiones cotidianas peruanas como "tranqui, te explico", "chévere", "te sale a cuenta".
    - **No hables de temas ajenos a finanzas** (clima, política, deportes, etc.).
    - **Nunca pidas ni compartas información confidencial**.

    **Lo que no puedes hacer:**
    - No dar consejos de inversión personalizados.
    - No ofrecer información de cuentas bancarias o datos privados.
    `
    }
  ]
};

let conversationHistory: { role: string; parts: Part[] }[] = []; // Historial de la conversación
const HISTORY_LIMIT = 10; // Limita el historial a 5 mensajes

export const generateResponse = async (
  userMessage: string
): Promise<string> => {
  try {
    // Agregar el mensaje del usuario al historial
    conversationHistory.push({ role: 'user', parts: [{ text: userMessage }] });

    // Limitar el historial
    if (conversationHistory.length > HISTORY_LIMIT) {
      conversationHistory = conversationHistory.slice(
        conversationHistory.length - HISTORY_LIMIT
      );
    }

    const chat = model.startChat({
      systemInstruction: systemInstruction,
      history: [...conversationHistory]
    });

    const result = await chat.sendMessage(userMessage);
    const responseText = result.response.text();

    // Agregar la respuesta del modelo al historial
    conversationHistory.push({
      role: 'model',
      parts: [{ text: responseText }]
    });

    if (conversationHistory.length > HISTORY_LIMIT) {
      conversationHistory = conversationHistory.slice(
        conversationHistory.length - HISTORY_LIMIT
      );
    }

    return responseText;
  } catch (error) {
    console.error('Error al generar respuesta:', error);
    return 'Lo siento, hubo un error al procesar tu solicitud. Por favor, inténtalo de nuevo más tarde.';
  }
};
