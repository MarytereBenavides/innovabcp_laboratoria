import express from 'express';
import { chatWithCamila } from '../controllers/chatController';

const router = express.Router();

router.post('/', chatWithCamila);

export default router;
