const { ROUTES } = require('../../config/constants');

export default function(request, response, next) {
  if (request.isAuthenticated()) {
    return next();
  }
  return response.redirect(ROUTES.LOGIN);
};
