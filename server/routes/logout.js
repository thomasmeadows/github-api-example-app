const { ROUTES } = require('../config/constants');

export default function(app) {
  app.get(ROUTES.LOGOUT, (request, response) => {
    request.logout();
    response.redirect(ROUTES.LOGIN);
  });
};
