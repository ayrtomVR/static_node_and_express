const express = require('express');
const router = express.Router();
const { data } = require('../data/data.json');
const { name } = data;
const { title } = data;
const { introduction } = data;

/* GET home page. */
router.get('/', function (req, res, next) {
    res.render('index', {
        Name: name,
        Title: title,
        Intros: introduction,
    });
});

module.exports = router;
