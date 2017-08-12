import GithubStrategy from 'passport-github';

const { GITHUB, ROUTES } = require('./constants');

export default function(app, passport) {
  passport.use(new GithubStrategy({
    clientID: GITHUB.CLIENT_ID,
    clientSecret: GITHUB.CLIENT_SECRET,
    callbackURL: ROUTES.GITHUB_AUTH_CALLBACK_URL,
  }, (accessToken, refreshToken, user, done) => {
    done(null, user);
  }));

  app.get(
    ROUTES.GITHUB_PASSPORT_AUTH_PATH,
    passport.authenticate(GITHUB.PASSPORT_AUTH_NAME)
  );

  // authentication callback redirects to /login if authentication failed or home if successful
  app.get(ROUTES.GITHUB_AUTH_CALLBACK_PATH,
    passport.authenticate(GITHUB.PASSPORT_AUTH_NAME, {
      failureRedirect: ROUTES.LOGIN
    }), (req, res) => {
      res.redirect(ROUTES.HOME);
    }
  );
};
