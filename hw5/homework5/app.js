// Required dependencies
const express = require('express');
const app = express();
const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20');
const cookieSession = require('cookie-session');

//Setup mongo
const mongoClient =
    require('mongodb').MongoClient;
const mongoURL = 'mongodb://localhost:27017';
let _db;
module.exports = {
  connect: function( callback ) {
    mongoClient.connect( mongoURL,
        { useNewUrlParser: true }, function( err, client
        ) {
          _db = client.db('passport');
          return callback( err );
        } );
  },
  getDB: () => { return _db; }
};

// cookieSession config
app.use(cookieSession({
  maxAge: 24 * 60 * 60 * 1000, // One day in milliseconds
  keys: ['randomstringhere']
}));

app.use(passport.initialize()); // Used to initialize passport
app.use(passport.session()); // Used to persist login sessions

// Strategy config
passport.use(new GoogleStrategy({
      clientID: '70075259380-fljvetq7259knt1pln3s1p174h6ddelc.apps.googleusercontent.com',
      clientSecret: 'YlfM3RrO9WAs-gtmT8-tDJhf',
      callbackURL: 'http://localhost:8000/auth/google/callback'
    },
    (accessToken, refreshToken, profile, done) => {
      done(null, profile); // passes the profile data to serializeUser
    }
));

// Used to stuff a piece of information into a cookie
passport.serializeUser((user, done) => {
  done(null, user);
});

// Used to decode the received cookie and persist session
passport.deserializeUser((user, done) => {
    User.findById(id, function(err, user) {
        done(err, user);
    });
});

// Middleware to check if the user is authenticated
function isUserAuthenticated(req, res, next) {
  if (req.user) {
    next();
  } else {
    res.send('You must login!');
  }
}

// Routes
app.get('/', (req, res) => {
  res.render('index.jade');
});

// passport.authenticate middleware is used here to authenticate the request
app.get('/auth/google', passport.authenticate('google', {
  scope: ['profile'] // Used to specify the required data
}));

// The middleware receives the data from Google and runs the function on Strategy config
app.get('/auth/google/callback', passport.authenticate('google'), (req, res) => {
  res.redirect('/secret');
});

// Secret route
app.get('/secret', isUserAuthenticated, (req, res) => {
  //res.send('You have reached the secret route');
  res.render('secret.jade');
});

// Logout route
app.get('/logout', (req, res) => {
  req.logout();
  res.redirect('/');
});

app.listen(8000, () => {
  console.log('Server Started!');
});

module.exports = app;
