import login from './login';
import logout from './logout';
import home from './home';
import profile from './profile';
import api from './api';
import notFound from './404';

export default function(app) {
  login(app);
  logout(app);
  home(app);
  profile(app);

  // set up api for ajax calls
  api(app);

  // add 404 fallback for all routes
  notFound(app);
};
