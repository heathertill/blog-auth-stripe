import * as express from 'express';

import authRouter from './auth';
import apiRouter from './api';
import paymentRouter from './payment';

const router = express.Router();

router.use('/payment', paymentRouter);
router.use('/auth', authRouter);
router.use('/api', apiRouter);


export default router;

