const express = require('express');
const router = express.Router();
const { data } = require('../data/data.json');

/* GET home page. */
router.get('/', function (req, res, next) {
    res.render('index', {
        Name: 'Tommy Vasquez',
        Title: 'Full Stack Javascript - Techdegree Student at Treehouse',
    });
});

module.exports = router;
