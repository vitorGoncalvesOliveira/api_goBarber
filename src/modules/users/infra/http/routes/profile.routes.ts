import { Router } from 'express';

import ProfileController from '../controllers/ProfileController';

import ensureAutheticated from '../middleware/ensureAuthenticated';

const profileRouter = Router();
profileRouter.use(ensureAutheticated);

const profileController = new ProfileController();

profileRouter.put('/', profileController.update);

export default profileRouter;
