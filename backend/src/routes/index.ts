import express from 'express';
import chat from './chatRoutes';
import authroutes from './authRoutes'
import trivia from './triviaRoutes';

const router = express.Router();

router.use('/chat', chat);
router.use('/auth', authroutes)
router.use('/trivia', trivia);


export default router;
