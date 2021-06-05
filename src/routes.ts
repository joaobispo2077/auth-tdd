import { Router } from 'express';
import sessionController from './controllers/SessionController';
import usersController from './controllers/UsersController';

const routes = Router();

routes.post('/auth', sessionController.store);
routes.post('/users', usersController.create);

export default routes;
