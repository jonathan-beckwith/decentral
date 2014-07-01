var express = require('express');
var router = express.Router();
var fs = require('fs');

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', { title: 'Decentral' });
});

router.get('/worldnews', function (req, res) {
    fs.readFile('./chunks/worldnews.json', function (err, data) {
        if (err) throw err;
        res.render('page', JSON.parse(data));
    })
});

module.exports = router;
