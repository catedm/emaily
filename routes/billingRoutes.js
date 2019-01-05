const keys = require('../config/keys');
const stripe = require('stripe')(keys.stripeSecretKey);
const requireLogin = require('../middlewares/requireLogin');

module.exports = (app) => {
  // why didn't we invoke requireLogin?
  // because we dont want to require login the instant express loads up and runs in our terminal
  // instead, express takes the reference to this function and calls it whenver the route is executed
  app.post('/api/stripe', requireLogin, async (req, res) => {
    const charge = await stripe.charges.create({
      amount: 500,
      currency: 'usd',
      description: "$5.00 for 5 credits",
      source: req.body.id
    });

    // the req.user property is available to us to access the current user because of our
    // passport config
    req.user.credits += 5;
    const user = await req.user.save();

    res.send(user);
  });
};