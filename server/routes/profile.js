import ensureAuthenticated from './policies/ensureAuthenticated';
const { VIEWS, ROUTES } = require('../config/constants');

export default function(app) {
  app.get(ROUTES.PROFILE, ensureAuthenticated, (req, res) => {
    const thisUser = req.github.getUser();
    thisUser.getEmails()
    .then(emailResponse => {
      return res.render(VIEWS.PROFILE, {
        user: Object.assign({}, req.user, { emails: emailResponse.data })
      });
    });
  });
};
