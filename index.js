const express = require('express');
const mongoose = require('mongoose');
const cookieSession = require('cookie-session');
const passport = require('passport');
const keys = require('./config/keys');
const bodyParser = require('body-parser');
require('./models/User');
require('./models/Survey');
require('./models/Recipient');
require('./services/passport');

mongoose.Promise = global.Promise;
// connect to the database using the URL stored in the config file
mongoose.connect(keys.mongoURI);

const app = express();

app.use(bodyParser.json());
// this statement tells express that it needs to use cookies in our app
app.use(
	cookieSession({
		// this must be entered in milliseconds
		// the following is equal to 30 days in milliseconds
		maxAge: 30 * 24 * 60 * 60 * 1000,
		// load in cookie encryption from keys file
		keys: [keys.cookieKey]
	})
);
// these app.use calls are adding middleware to our application
// middleware modifies / preprocesses the incoming requests before they are sent to route handlers
app.use(passport.initialize());
app.use(passport.session());

require('./routes/authRoutes')(app);
require('./routes/billingRoutes')(app);
require('./routes/surveyRoutes')(app);

if (process.env.NODE_ENV === 'production') {
	// Express will serve up production assests
	// like main.js file, or main.css file
	// this code says, if anything is requested and we don't already have a route handler
	// set up for it, look in the client/build directory
	app.use(express.static('client/build'));

	// Exress will serve up the index.html file
	// if it does not recognize the route
	const path = require('path');
	app.get('*', (req, res) => {
		res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
	});
}

const PORT = process.env.PORT || 5000;
app.listen(PORT);