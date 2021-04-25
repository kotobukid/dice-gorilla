var express = require('express');
var router = express.Router();
const fs = require('fs');
const path = require('path')

router.get('/manifest.json', function (req, res, next) {
    fs.readFile(path.resolve('routes/manifest.json'), (err, result) => {

        res.setHeader("Content-Type", 'application/manifest+json');
        res.writeHead(200);
        res.end(result.toString());
    });
});

router.get('/serviceworker.js', function (req, res, next) {
    fs.readFile(path.resolve('public/javascripts/serviceworker.js'), (err, result) => {

        res.setHeader('Content-Type', 'text/javascript');
        res.writeHead(200);
        res.end(result.toString());
    });
});

router.get('/', function (req, res, next) {
    res.render('pwa/index', {title: 'Express'});
});

module.exports = router;
