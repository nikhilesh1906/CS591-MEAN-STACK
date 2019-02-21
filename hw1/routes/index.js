let express = require('express');
let router = express.Router();

 //Middleware
router.use(function printTime(req, res, next)  {
  console.log('Request at :',Date.now());
  next();
});

/* GET home page. */
// router.get('/', function(req, res, next) {
//   res.render('index', { title: 'Express!!' });
// });

router.get('/', function(req, res, next) {
  res.json({String : 'Nikhilesh'});
});

// router.get('/about', function(req, res, next) {
//   res.send('Express is cool!');
// });

module.exports = router;