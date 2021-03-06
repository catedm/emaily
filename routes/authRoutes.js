const passport = require('passport');

module.exports = (app) => {
	app.get('/auth/google', passport.authenticate('google', {
		scope: ['profile', 'email']
	}));

	// this route is the one that we specified in our google account when we set up our Oauth API
	// passport.authenticate('google') is middleware that is authentication the request
	app.get(
		'/auth/google/callback',
		passport.authenticate('google'),
		(req, res) => {
			res.redirect('/surveys');
		}
	);

	app.get('/api/logout', (req, res) => {
		// logout is a function that is attached to the request object automatically by passport
		// it will take the cookie that contains the userId and kills the cookie in there 
		req.logout();
		res.redirect('/');
	});

	app.get('/api/current_user', (req, res) => {
		res.send(req.user);
	});
};