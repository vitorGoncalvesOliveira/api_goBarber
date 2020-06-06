import { Router } from 'express';

import ensureAutheticated from '@modules/users/infra/http/middleware/ensureAuthenticated';
import ProviderController from '../controllers/ProvidersController';
import ProviderMonthAvailabilityController from '../controllers/ProviderMonthAvailabilityController';
import ProviderDayAvailabilityController from '../controllers/ProviderDayAvailabilityController';

const providerRouter = Router();

providerRouter.use(ensureAutheticated);
const providerController = new ProviderController();
const providerMonthAvailabilityController = new ProviderMonthAvailabilityController();
const providerDayAvailabilityController = new ProviderDayAvailabilityController();

providerRouter.get('/', providerController.index);
providerRouter.get(
  '/:provider_id/month-availability',
  providerMonthAvailabilityController.index,
);
providerRouter.get(
  '/:provider_id/day-availability',
  providerDayAvailabilityController.index,
);

export default providerRouter;
