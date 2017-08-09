import ensureAuthenticated from './policies/ensureAuthenticated';
const { VIEWS, ROUTES } = require('../config/constants');

export default function(app) {
  app.get(ROUTES.PROFILE, ensureAuthenticated, (req, res) => {
    return res.render(VIEWS.PROFILE);
  });
};
