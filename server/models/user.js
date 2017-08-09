export default function(app) {
  return app.mongoose.model('User', {
    email: String,
  });
};
