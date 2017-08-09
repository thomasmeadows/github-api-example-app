const { ROUTES, VIEWS } = require('../config/constants');

export default function(app) {
  app.get(ROUTES.LOGIN, (request, response) => {
    response.render(VIEWS.LOGIN, { onLoginScreen: true });
  });
};
