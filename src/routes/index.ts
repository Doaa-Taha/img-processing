import express from 'express';
import imgRoute from './api/img';
import { Request, Response } from 'express';

const routes = express.Router();

routes.get('/', (req: Request, res: Response) => {
  res.send('welcome to image proocessing project');
});

routes.use('/img', imgRoute);

export default routes;
