// what is this code doing?

// this code is forwarding requests to the node express API when the route '/auth/google' is accessed
// THIS CODE IS FOR DEVELOPMENT MODE ONLY
// in production - there is not a serperate server, like in dev mode!
// during the build process in Heroku, a single server will be made so we don't have to worry about proxies
const proxy = require('http-proxy-middleware');
module.exports = function (app) {
  app.use(proxy('/auth/google', { target: 'http://localhost:5000/' }));
  app.use(proxy('/api/*', { target: 'http://localhost:5000/' }));
  app.use(proxy('/api/surveys/*', { target: 'http://localhost:5000/' }));
}