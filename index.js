const express = require('express');
const mongoose = require('mongoose');
const cookieSession = require('cookie-session');
const passport = require('passport');
const keys = require('./config/keys');
require('./models/user');
require('./services/passport');

// connect to the database using the URL stored in the config file
mongoose.connect(keys.mongoURI);

const app = express();

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

const PORT = process.env.PORT || 5000;
app.listen(PORT);