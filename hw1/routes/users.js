let express = require('express');
let router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.json({Name : 'Nikhilesh Murugavel'});
});

router.post('/', function(req, res, next) {
  res.json({name : req.body.name});
});

module.exports = router;
