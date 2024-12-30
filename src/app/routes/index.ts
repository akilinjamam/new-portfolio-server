import express from 'express';
import { blogRouter } from '../../modules/blog/blog.route';
import { expRouter } from '../../modules/experience/experience.route';
import { projectRouter } from '../../modules/projects/projects.route';
import { skillRouter } from '../../modules/skills/skills.route';

const router = express.Router();

const moduleRoutes = [
  {
    path: '/blogs',
    route: blogRouter,
  },
  {
    path: '/exp',
    route: expRouter,
  },
  {
    path: '/projects',
    route: projectRouter,
  },
  {
    path: '/skills',
    route: skillRouter,
  },
];

// eslint-disable-next-line @typescript-eslint/no-explicit-any
moduleRoutes.forEach((route) => router.use(route.path, route.route as any));

export default router;
