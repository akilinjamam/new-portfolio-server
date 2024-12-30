import express from 'express';
import { projectController } from './projects.controller';

const route = express.Router();

route.post('/create-project', projectController.createProject);
route.get('/', projectController.getProject);
route.patch('/:id', projectController.updateProjects);
route.patch('/:id', projectController.deleteProjects);

export const projectRouter = route;
