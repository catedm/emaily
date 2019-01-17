// next is a function that we call when our function is complete
// its like the done() callback in passport
// the next() function will pass the request to the next middleware in the chain
module.exports = (req, res, next) => {
  // if there is no user, return and send back 401 and error message
  if (req.user.credits < 1) {
    return res.status(403).send({ error: 'Not enough credits.' });
  }
  
  // if user exists, great! pass the request forward to the next middleware
  next();
};