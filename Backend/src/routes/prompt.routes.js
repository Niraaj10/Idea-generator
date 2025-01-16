import { Router } from 'express'
import { generatePromptResponse } from '../controllers/generatorResponse.ctrl.js'
import { getResponseHistory } from '../controllers/responseHistory.ctrl.js';

const router = Router();

router.route('/generateResponse').post(generatePromptResponse);

router.route('/responseHistory').get(getResponseHistory);

export default router;