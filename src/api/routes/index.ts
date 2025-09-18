import { Router } from 'express';
import { ping } from '../controllers/pingController.js';

export const router = Router();
router.get('/ping', ping);
