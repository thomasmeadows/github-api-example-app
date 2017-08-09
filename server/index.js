import express from 'express';
import passport from 'passport';
import bodyParser from 'body-parser';
import path from 'path';
import sourceMap from 'source-map-support';

import configWebpackDev from './config/webpack-dev';
import configModels from './models';
import configSessionsSecurity from './config/sessions-security';
import configPassportGithub from './config/passport-github';
import configRoutes from './routes';
import configViews from './config/views';


sourceMap.install();

const { SERVER } = require('./config/constants');

const app = express();

configWebpackDev(app);

configModels(app);

configSessionsSecurity(app, passport);

configPassportGithub(app, passport);

configViews(app);

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(express.static(path.join(__dirname, SERVER.PUBLIC_FOLDER_NAME)));

configRoutes(app);

app.listen(Number(SERVER.PORT), () => {
  console.log(`listening to port: ${SERVER.PORT}`);
});
