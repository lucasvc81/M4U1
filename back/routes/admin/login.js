var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  res.render('admin/login' , { 
    layout: 'admin/login' 
 });
});

module.exports = router;