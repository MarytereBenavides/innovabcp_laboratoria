import express from 'express';
import * as triviaController from '../controllers/triviaController';

const router = express.Router();

router.post('/start', triviaController.startGame);
router.get('/question/:game_session_id', triviaController.getQuestion);
router.post('/answer', triviaController.submitAnswer);
router.post('/end', triviaController.endGame);

export default router;
