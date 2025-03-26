import express from 'express';
import chat from './chatRoutes';

const router = express.Router();

router.use('/chat', chat);

export default router;
