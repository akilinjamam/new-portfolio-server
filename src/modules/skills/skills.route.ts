import express from 'express';
import { skillController } from './skills.controller';

const route = express.Router();

route.post('/create-skill', skillController.createSkill);
route.get('/', skillController.getSkill);
route.patch('/:id', skillController.updateSkills);
route.patch('/:id', skillController.deleteSkills);

export const skillRouter = route;
