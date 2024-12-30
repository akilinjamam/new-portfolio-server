import express from 'express';
import { ExpController } from './experience.controller';

const route = express.Router();

route.post('/create-exp', ExpController.createExp);
route.get('/', ExpController.getExp);
route.patch('/:id', ExpController.updateExps);
route.patch('/:id', ExpController.deleteExps);

export const expRouter = route;
