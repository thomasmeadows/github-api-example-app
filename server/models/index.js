import userModel from './user';
import promise from 'bluebird';
import mongoose from 'mongoose';

export default function(app) {
  app.mongoose = mongoose;
  app.mongoose.Promise = promise;
  app.mongoose.connect(process.env.MONGODB_URI, { useMongoClient: true });

  app.models = {};
  app.models.User = userModel(app);
};
