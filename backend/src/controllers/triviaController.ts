import { Request, Response } from 'express';
import * as triviaService from '../services/triviaService';
import { generateAdviceAnswer } from '../services/geminiService';


export const startGame = async (req: Request, res: Response) => {
  try {
    const { user_id } = req.body;
    const gameSession = await triviaService.startTrivia(user_id);

    res.json({ message: 'Trivia iniciada', gameSession });
  } catch (error) {
    res.status(500).json({ error: 'Error iniciando trivia' });
  }
};

export const getQuestion = async (req: Request, res: Response) => {
  try {
    const { game_session_id } = req.params;

    const gameSession = await triviaService.getGameSession(+game_session_id);
    if (!gameSession){
        res.status(404).json({ error: 'Sesión no encontrada' });
        return;
    }

    const questions = await triviaService.getQuestions(+gameSession.game_id);
    if (!questions){
        res.status(404).json({ error: 'Preguntas no encontradas' });
        return;
    }

    res.json({
        message: 'Preguntas obtenidas correctamente',
        questions
    });
  } catch (error) {
    res.status(500).json({ error: 'Error obteniendo pregunta' });
  }
};

export const submitAnswer = async (req: Request, res: Response) => {
  try {
    const { game_session_id, question_id, answer_id } = req.body;

    const gameSession = await triviaService.getGameSession(+game_session_id);
    if (!gameSession){
        res.status(404).json({ error: 'Sesión no encontrada' });
        return;
    }

    const result = await triviaService.checkAnswer(game_session_id, answer_id, question_id);
    if (!result){
        res.status(404).json({ error: 'Respuesta no encontrada' });
        return
    }

    const advice = await generateAdviceAnswer(result.answer.text, result.answer.question.text, result.isCorrect);

    res.json({
      isCorrect: result.isCorrect,
      message: result.isCorrect ? 'Respuesta correcta' : 'Respuesta incorrecta',
      score: result.scoreEarned,
      advice
    });
  } catch (error) {
    res.status(500).json({ error: 'Error procesando respuesta' });
  }
};

export const endGame = async (req: Request, res: Response) => {
  try {
    const { game_session_id, score } = req.body;
    const gameSession = await triviaService.getGameSession(+game_session_id);
    if (!gameSession){
        res.status(404).json({ error: 'Sesión no encontrada' });
        return;
    }

    await triviaService.updateScore(+game_session_id, score);
        
    res.json({ message: 'Trivia finalizada' });
  } catch (error) {
    res.status(500).json({ error: 'Error finalizando trivia' });
  }
};
