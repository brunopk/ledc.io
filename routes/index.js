var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Index' });
});

router.get('/test', function(req, res, next) {
  res.render('test', { title: 'Tracks' });
});

router.get('/effects', function(req, res, next) {
  res.render('effect_panel', { title: 'Effects' });
});


module.exports = router;
