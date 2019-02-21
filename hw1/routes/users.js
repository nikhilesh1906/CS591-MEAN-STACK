let express = require('express');
let router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.json({String : 'Nikhilesh'});
});

router.post('/', function(req, res, next) {
  res.json({name : req.body.name});
});

module.exports = router;
