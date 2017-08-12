const CONSTANTS = {};

CONSTANTS.CACHE_VERSION = '__CACHE__VERSION__';

CONSTANTS.DB = {
  MONGO_URI: process.env.MONGODB_URI,
  SESSION_COLLECTION_NAME: 'GithubSessions'
};

CONSTANTS.EXPRESS = {
  SESSION_NAME: process.env.EXPRESS_SESSION_NAME,
  SESSION_SECRET: process.env.EXPRESS_SESSION_SECRET,
};

CONSTANTS.METHODS = {
  GET: 'GET',
  POST: 'POST',
  PUT: 'PUT',
  DEL: 'DEL'
};

CONSTANTS.ROUTES = {
  API: {
  },
  HOME: '/',
  LOGIN: '/login',
  LOGOUT: '/logout',
  PROFILE: '/profile',
  GITHUB_PASSPORT_AUTH_PATH: '/auth/github',
  GITHUB_AUTH_CALLBACK_PATH: process.env.GITHUB_AUTH_CALLBACK_PATH,
  GITHUB_AUTH_CALLBACK_URL: process.env.GITHUB_AUTH_CALLBACK_URL,
};

CONSTANTS.SERVER = {
  ENV: process.env.NODE_ENV,
  ENV_PRODUCTION: 'production',
  ENV_DEVELOPMENT: 'development',
  PORT: process.env.PORT,
  PUBLIC_FOLDER_NAME: 'public',
  TRUST_PROXY: 'trust proxy'
};

CONSTANTS.GITHUB = {
  API_URL: process.env.GITHUB_API_URL,
  CLIENT_ID: process.env.GITHUB_OAUTH_CLIENT_ID,
  CLIENT_SECRET: process.env.GITHUB_OAUTH_CLIENT_SECRET,
  PASSPORT_AUTH_NAME: 'github',
  ROUTES: {
    ESTIMATE: '/v1.2/requests/estimate',
    HISTORY: '/v1.2/history',
    PROFILE: '/v1/me',
    PRODUCTS: '/v1.2/products',
    REQUESTS: '/v1.2/requests',
    REQUESTS_CURRENT: '/v1/requests/current',
    SANDBOX_REQUESTS: '/v1.2/sandbox/requests',
  },
  ROUTE_STATUS: {
    ACCEPTED: 'accepted',
    ARRIVING: 'arriving',
    IN_PROGRESS: 'in_progress',
    COMPLETED: 'completed'
  },
  SCOPE: {
    PROFILE: 'profile'
  }
};

CONSTANTS.VIEWS = {
  PUG: 'pug',
  HOME: 'home',
  LOGIN: 'login',
  PROFILE: 'profile',
  VIEWS: 'views',
  VIEW_ENGINE: 'view engine'
};

CONSTANTS.WEBPACK = {
  HOT_MIDDLEWARE_CLIENT: 'webpack-hot-middleware/client?reload=true'
};

module.exports = CONSTANTS;
