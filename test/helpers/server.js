const express = require('express');
const passport = require('passport');
const bodyParser = require('body-parser');
const path = require('path');

const configPassportGithub = require('../../server/config/passport-github');
const configSessionsSecurity = require('../../server/config/sessions-security');
const configRoutes = require('../../server/routes');
const configViews = require('../../server/config/views');

const { SERVER } = require('../../server/config/constants');

module.exports = function() {
  const app = express();

  configSessionsSecurity(app, passport);

  configPassportGithub(app, passport);

  configViews(app);

  app.use(bodyParser.urlencoded({ extended: true }));
  app.use(bodyParser.json());

  app.use(express.static(path.join(__dirname, SERVER.PUBLIC_FOLDER_NAME)));

  configRoutes(app);

  return app;
};
