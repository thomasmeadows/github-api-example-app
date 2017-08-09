import path from 'path';

import { VIEWS, CACHE_VERSION } from './constants';

export default function(app) {
  app.set(VIEWS.VIEWS, path.join(__dirname, 'views'));
  app.set(VIEWS.VIEW_ENGINE, VIEWS.PUG);

  app.use((req, res, next) => {
    // helps make sure navbar does not display on login screen
    res.locals.onLoginScreen = false;
    // helps make sure google maps script does not load on every page
    res.locals.includeGoogleMapsScript = false;
    // add variable for cache busting
    res.locals.cacheVersion = CACHE_VERSION;
    next();
  });
};
