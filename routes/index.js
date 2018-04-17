var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  // looks in views folder
  res.render('shop/index', { title: 'Select Rents' });
});

module.exports = router;
