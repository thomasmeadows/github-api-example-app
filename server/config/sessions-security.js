import session from 'express-session';
import connectMongo from 'connect-mongo';
import helmet from 'helmet';

import { EXPRESS, SERVER } from './constants';

const MongoSessionStore = connectMongo(session);

export default function(app, passport) {
  const sessionStore = new MongoSessionStore({
    mongooseConnection: app.mongoose.connection
  });

  const expressSessionOptions = {
    secret: EXPRESS.SESSION_SECRET,
    name: EXPRESS.SESSION_NAME,
    resave: false,
    store: sessionStore,
    saveUninitialized: true
  };

  if(SERVER.ENV === SERVER.ENV_PRODUCTION) {
    const expiryDate = new Date(Date.now() + 24 * 60 * 60 * 1000);

    app.set(SERVER.TRUST_PROXY, 1);
    expressSessionOptions.cookie = {
      secure: true,
      expires: expiryDate
    };
  }

  app.use(session(expressSessionOptions));
  app.use(passport.initialize());
  app.use(passport.session());

  passport.serializeUser((user, done) => {
    done(null, user);
  });
  passport.deserializeUser((user, done) => {
    done(null, user);
  });

  app.use(helmet());
};
