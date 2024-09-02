import express from 'express';
import { paymentController } from './payment.controller';

const router = express.Router();

router.post(
  '/',

  paymentController.createSuccess,
);
router.post('/payment', paymentController.makePayment);

export const paymentRouter = router;
