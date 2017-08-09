import ensureAuthenticated from './policies/ensureAuthenticated';

const { ROUTES, VIEWS } = require('../config/constants');

export default function(app) {
  app.get(ROUTES.HOME, ensureAuthenticated, (request, response) => {
    response.render(VIEWS.HOME);
  });
};
