/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 4);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var CONSTANTS = {};

CONSTANTS.CACHE_VERSION = '__CACHE__VERSION__';

CONSTANTS.DB = {
  MONGO_URI: process.env.MONGODB_URI,
  SESSION_COLLECTION_NAME: 'GithubSessions'
};

CONSTANTS.EXPRESS = {
  SESSION_NAME: process.env.EXPRESS_SESSION_NAME,
  SESSION_SECRET: process.env.EXPRESS_SESSION_SECRET
};

CONSTANTS.METHODS = {
  GET: 'GET',
  POST: 'POST',
  PUT: 'PUT',
  DEL: 'DEL'
};

CONSTANTS.ROUTES = {
  API: {},
  HOME: '/',
  LOGIN: '/login',
  LOGOUT: '/logout',
  PROFILE: '/profile',
  GITHUB_PASSPORT_AUTH_PATH: '/auth/github',
  GITHUB_CALLBACK_PATH: process.env.GITHUB_CALLBACK_PATH,
  GITHUB_CALLBACK_URL: process.env.GITHUB_CALLBACK_URL
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
  CLIENT_ID: process.env.GITHUB_CLIENT_ID,
  CLIENT_SECRET: process.env.GITHUB_CLIENT_SECRET,
  PASSPORT_AUTH_NAME: 'github',
  ROUTES: {
    ESTIMATE: '/v1.2/requests/estimate',
    HISTORY: '/v1.2/history',
    PROFILE: '/v1/me',
    PRODUCTS: '/v1.2/products',
    REQUESTS: '/v1.2/requests',
    REQUESTS_CURRENT: '/v1/requests/current',
    SANDBOX_REQUESTS: '/v1.2/sandbox/requests'
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

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = require("path");

/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = require("webpack");

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (request, response, next) {
  if (request.isAuthenticated()) {
    return next();
  }
  return response.redirect(ROUTES.LOGIN);
};

var _require = __webpack_require__(0),
    ROUTES = _require.ROUTES;

;

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _express = __webpack_require__(5);

var _express2 = _interopRequireDefault(_express);

var _passport = __webpack_require__(6);

var _passport2 = _interopRequireDefault(_passport);

var _bodyParser = __webpack_require__(7);

var _bodyParser2 = _interopRequireDefault(_bodyParser);

var _path = __webpack_require__(1);

var _path2 = _interopRequireDefault(_path);

var _sourceMapSupport = __webpack_require__(8);

var _sourceMapSupport2 = _interopRequireDefault(_sourceMapSupport);

var _webpackDev = __webpack_require__(9);

var _webpackDev2 = _interopRequireDefault(_webpackDev);

var _models = __webpack_require__(18);

var _models2 = _interopRequireDefault(_models);

var _sessionsSecurity = __webpack_require__(22);

var _sessionsSecurity2 = _interopRequireDefault(_sessionsSecurity);

var _passportGithub = __webpack_require__(26);

var _passportGithub2 = _interopRequireDefault(_passportGithub);

var _routes = __webpack_require__(28);

var _routes2 = _interopRequireDefault(_routes);

var _views = __webpack_require__(35);

var _views2 = _interopRequireDefault(_views);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_sourceMapSupport2.default.install();

var _require = __webpack_require__(0),
    SERVER = _require.SERVER;

var app = (0, _express2.default)();

(0, _webpackDev2.default)(app);

(0, _models2.default)(app);

(0, _sessionsSecurity2.default)(app, _passport2.default);

(0, _passportGithub2.default)(app, _passport2.default);

(0, _views2.default)(app);

app.use(_bodyParser2.default.urlencoded({ extended: true }));
app.use(_bodyParser2.default.json());

app.use(_express2.default.static(_path2.default.join(__dirname, SERVER.PUBLIC_FOLDER_NAME)));

(0, _routes2.default)(app);

app.listen(Number(SERVER.PORT), function () {
  console.log('listening to port: ' + SERVER.PORT);
});

/***/ }),
/* 5 */
/***/ (function(module, exports) {

module.exports = require("express");

/***/ }),
/* 6 */
/***/ (function(module, exports) {

module.exports = require("passport");

/***/ }),
/* 7 */
/***/ (function(module, exports) {

module.exports = require("body-parser");

/***/ }),
/* 8 */
/***/ (function(module, exports) {

module.exports = require("source-map-support");

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (app) {
  if (SERVER.ENV === SERVER.ENV_DEVELOPMENT) {
    /* eslint-disable */
    var webpackDevMiddleware = __webpack_require__(10);
    var webpack = __webpack_require__(2);
    _webpackConfig.browserConfig.entry = [_path2.default.join(__dirname, '..', 'app', 'index.js'), _path2.default.join(__dirname, '..', 'app', 'styles.scss')];

    var webpackDevOptions = {
      contentBase: _path2.default.join(__dirname, '..', '..'),
      watchContentBase: true,
      inline: true,
      publicPath: ROUTES.HOME,
      historyApiFallback: true
    };

    _webpackConfig.browserConfig.watch = true;
    _webpackConfig.browserConfig.entry.unshift(WEBPACK.HOT_MIDDLEWARE_CLIENT);
    _webpackConfig.browserConfig.plugins.push(new webpack.HotModuleReplacementPlugin());

    var webpackCompiler = webpack(_webpackConfig.browserConfig);

    app.use(webpackDevMiddleware(webpackCompiler, webpackDevOptions));
    app.use(__webpack_require__(11)(webpackCompiler));
    /* eslint-enable */
  }
};

var _path = __webpack_require__(1);

var _path2 = _interopRequireDefault(_path);

var _webpackConfig = __webpack_require__(12);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _require = __webpack_require__(0),
    WEBPACK = _require.WEBPACK,
    SERVER = _require.SERVER,
    ROUTES = _require.ROUTES;

;

/***/ }),
/* 10 */
/***/ (function(module, exports) {

module.exports = require("webpack-dev-middleware");

/***/ }),
/* 11 */
/***/ (function(module, exports) {

module.exports = require("webpack-hot-middleware");

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.browserConfig = undefined;

var _webpack = __webpack_require__(13);

var _webpack2 = _interopRequireDefault(_webpack);

var _webpack3 = __webpack_require__(15);

var _webpack4 = _interopRequireDefault(_webpack3);

var _webpackMerge = __webpack_require__(17);

var _webpackMerge2 = _interopRequireDefault(_webpackMerge);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var webpackConfigArray = [_webpack2.default, _webpack4.default];

var baseConfig = {
  module: {
    rules: [{
      test: /\.js$/,
      exclude: /node_modules/,
      loader: 'babel-loader',
      options: {
        presets: ['es2016']
      }
    }]
  },
  devtool: 'sourcemap'
};

webpackConfigArray.forEach(function (configObject, i) {
  webpackConfigArray[i] = _webpackMerge2.default.smart(configObject, baseConfig);
});

var browserConfig = exports.browserConfig = webpackConfigArray[0];

exports.default = webpackConfigArray;

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _path = __webpack_require__(1);

var _path2 = _interopRequireDefault(_path);

var _webpack = __webpack_require__(2);

var _webpack2 = _interopRequireDefault(_webpack);

var _extractTextWebpackPlugin = __webpack_require__(14);

var _extractTextWebpackPlugin2 = _interopRequireDefault(_extractTextWebpackPlugin);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var extractSass = new _extractTextWebpackPlugin2.default({
  filename: 'styles.css'
});

var plugins = [extractSass];

if (process.env.COMPRESS) {
  plugins.push(new _webpack2.default.optimize.UglifyJsPlugin());
}

module.exports = {
  entry: [_path2.default.join(__dirname, 'app', 'index.js'), _path2.default.join(__dirname, 'app', 'styles.scss')],
  module: {
    rules: [{
      test: /\.scss$/,
      use: extractSass.extract({
        use: [{
          loader: 'css-loader'
        }, {
          loader: 'sass-loader'
        }],
        // use style-loader in development
        fallback: 'style-loader'
      })
    }, {
      test: /\.js$/,
      exclude: /(node_modules|bower_components)/,
      use: {
        loader: 'babel-loader',
        options: {
          presets: ['env']
        }
      }
    }]
  },
  plugins: plugins,
  resolve: {
    extensions: ['.js', '.json', '.scss']
  },
  output: {
    path: _path2.default.join(__dirname, 'server', 'public'),
    filename: 'browser.js'
  }
};

/***/ }),
/* 14 */
/***/ (function(module, exports) {

module.exports = require("extract-text-webpack-plugin");

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _webpackNodeExternals = __webpack_require__(16);

var _webpackNodeExternals2 = _interopRequireDefault(_webpackNodeExternals);

var _path = __webpack_require__(1);

var _webpack = __webpack_require__(2);

var _webpack2 = _interopRequireDefault(_webpack);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

module.exports = {
  entry: './server/index.js',
  target: 'node',
  node: {
    __dirname: false,
    __filename: false
  },
  plugins: [new _webpack2.default.DefinePlugin({
    __CACHE__VERSION__: new Date().getTime()
  })],
  resolve: {
    extensions: ['.js', '.json', '.scss']
  },
  output: {
    path: (0, _path.join)(__dirname, 'server'),
    filename: 'server.build.js'
  },
  externals: [(0, _webpackNodeExternals2.default)()]
};

/***/ }),
/* 16 */
/***/ (function(module, exports) {

module.exports = require("webpack-node-externals");

/***/ }),
/* 17 */
/***/ (function(module, exports) {

module.exports = require("webpack-merge");

/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (app) {
  app.mongoose = _mongoose2.default;
  app.mongoose.Promise = _bluebird2.default;
  app.mongoose.connect(process.env.MONGODB_URI, { useMongoClient: true });

  app.models = {};
  app.models.User = (0, _user2.default)(app);
};

var _user = __webpack_require__(19);

var _user2 = _interopRequireDefault(_user);

var _bluebird = __webpack_require__(20);

var _bluebird2 = _interopRequireDefault(_bluebird);

var _mongoose = __webpack_require__(21);

var _mongoose2 = _interopRequireDefault(_mongoose);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

;

/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (app) {
  return app.mongoose.model('User', {
    email: String
  });
};

;

/***/ }),
/* 20 */
/***/ (function(module, exports) {

module.exports = require("bluebird");

/***/ }),
/* 21 */
/***/ (function(module, exports) {

module.exports = require("mongoose");

/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (app, passport) {
  var sessionStore = new MongoSessionStore({
    mongooseConnection: app.mongoose.connection
  });

  var expressSessionOptions = {
    secret: _constants.EXPRESS.SESSION_SECRET,
    name: _constants.EXPRESS.SESSION_NAME,
    resave: false,
    store: sessionStore,
    saveUninitialized: true
  };

  if (_constants.SERVER.ENV === _constants.SERVER.ENV_PRODUCTION) {
    var expiryDate = new Date(Date.now() + 24 * 60 * 60 * 1000);

    app.set(_constants.SERVER.TRUST_PROXY, 1);
    expressSessionOptions.cookie = {
      secure: true,
      expires: expiryDate
    };
  }

  app.use((0, _expressSession2.default)(expressSessionOptions));
  app.use(passport.initialize());
  app.use(passport.session());

  passport.serializeUser(function (user, done) {
    done(null, user);
  });
  passport.deserializeUser(function (user, done) {
    done(null, user);
  });

  app.use((0, _helmet2.default)());
};

var _expressSession = __webpack_require__(23);

var _expressSession2 = _interopRequireDefault(_expressSession);

var _connectMongo = __webpack_require__(24);

var _connectMongo2 = _interopRequireDefault(_connectMongo);

var _helmet = __webpack_require__(25);

var _helmet2 = _interopRequireDefault(_helmet);

var _constants = __webpack_require__(0);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var MongoSessionStore = (0, _connectMongo2.default)(_expressSession2.default);

;

/***/ }),
/* 23 */
/***/ (function(module, exports) {

module.exports = require("express-session");

/***/ }),
/* 24 */
/***/ (function(module, exports) {

module.exports = require("connect-mongo");

/***/ }),
/* 25 */
/***/ (function(module, exports) {

module.exports = require("helmet");

/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (app, passport) {
  passport.use(new _passportGithub2.default({
    clientID: GITHUB.CLIENT_ID,
    clientSecret: GITHUB.CLIENT_SECRET,
    callbackURL: ROUTES.GITHUB_CALLBACK_URL
  }, function (accessToken, refreshToken, user, done) {
    done(null, user);
  }));

  app.get(ROUTES.GITHUB_PASSPORT_AUTH_PATH, passport.authenticate(GITHUB.PASSPORT_AUTH_NAME));

  // authentication callback redirects to /login if authentication failed or home if successful
  app.get(ROUTES.GITHUB_CALLBACK_PATH, passport.authenticate(GITHUB.PASSPORT_AUTH_NAME, {
    failureRedirect: ROUTES.LOGIN
  }), function (req, res) {
    res.redirect(ROUTES.HOME);
  });
};

var _passportGithub = __webpack_require__(27);

var _passportGithub2 = _interopRequireDefault(_passportGithub);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _require = __webpack_require__(0),
    GITHUB = _require.GITHUB,
    ROUTES = _require.ROUTES;

;

/***/ }),
/* 27 */
/***/ (function(module, exports) {

module.exports = require("passport-github");

/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (app) {
  (0, _login2.default)(app);
  (0, _logout2.default)(app);
  (0, _home2.default)(app);
  (0, _profile2.default)(app);

  // set up api for ajax calls
  (0, _api2.default)(app);

  // add 404 fallback for all routes
  (0, _2.default)(app);
};

var _login = __webpack_require__(29);

var _login2 = _interopRequireDefault(_login);

var _logout = __webpack_require__(30);

var _logout2 = _interopRequireDefault(_logout);

var _home = __webpack_require__(31);

var _home2 = _interopRequireDefault(_home);

var _profile = __webpack_require__(32);

var _profile2 = _interopRequireDefault(_profile);

var _api = __webpack_require__(33);

var _api2 = _interopRequireDefault(_api);

var _ = __webpack_require__(34);

var _2 = _interopRequireDefault(_);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

;

/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (app) {
  app.get(ROUTES.LOGIN, function (request, response) {
    response.render(VIEWS.LOGIN, { onLoginScreen: true });
  });
};

var _require = __webpack_require__(0),
    ROUTES = _require.ROUTES,
    VIEWS = _require.VIEWS;

;

/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (app) {
  app.get(ROUTES.LOGOUT, function (request, response) {
    request.logout();
    response.redirect(ROUTES.LOGIN);
  });
};

var _require = __webpack_require__(0),
    ROUTES = _require.ROUTES;

;

/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (app) {
  app.get(ROUTES.HOME, _ensureAuthenticated2.default, function (request, response) {
    response.render(VIEWS.HOME);
  });
};

var _ensureAuthenticated = __webpack_require__(3);

var _ensureAuthenticated2 = _interopRequireDefault(_ensureAuthenticated);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _require = __webpack_require__(0),
    ROUTES = _require.ROUTES,
    VIEWS = _require.VIEWS;

;

/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (app) {
  app.get(ROUTES.PROFILE, _ensureAuthenticated2.default, function (req, res) {
    return res.render(VIEWS.PROFILE);
  });
};

var _ensureAuthenticated = __webpack_require__(3);

var _ensureAuthenticated2 = _interopRequireDefault(_ensureAuthenticated);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _require = __webpack_require__(0),
    VIEWS = _require.VIEWS,
    ROUTES = _require.ROUTES;

;

/***/ }),
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (app) {};

;

/***/ }),
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (app) {
  app.use('/api/*', function (req, res) {
    return res.status(404).send({
      message: 'route not found'
    });
  });

  app.use('/*', function (req, res) {
    return res.status(404).render('404');
  });
};

;

/***/ }),
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (app) {
  app.set(_constants.VIEWS.VIEWS, _path2.default.join(__dirname, 'views'));
  app.set(_constants.VIEWS.VIEW_ENGINE, _constants.VIEWS.PUG);

  app.use(function (req, res, next) {
    // helps make sure navbar does not display on login screen
    res.locals.onLoginScreen = false;
    // helps make sure google maps script does not load on every page
    res.locals.includeGoogleMapsScript = false;
    // add variable for cache busting
    res.locals.cacheVersion = _constants.CACHE_VERSION;
    next();
  });
};

var _path = __webpack_require__(1);

var _path2 = _interopRequireDefault(_path);

var _constants = __webpack_require__(0);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

;

/***/ })
/******/ ]);
//# sourceMappingURL=server.build.js.map