var express = require('express');
var router = express.Router();
var fs = require('fs');
var decentral = require('../decentral')

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', { title: 'Decentral' });
});

router.get('/r/*', function (req, res) {
    decentral.load(
        req.url.replace('/r/', ''),
        function (data) {
            res.render(data.template, { content: data.content })
        }
    );
});

module.exports = router;
