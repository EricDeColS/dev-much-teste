import { Router } from 'express';
import recipeController from '../controllers/recipeController'

const routes = new Router();

routes.get('/recipes', recipeController);

export default routes;