const express = require('express');
const router = express.Router();

/* GET about listing. */
router.get('/', (req, res, next) => {
    res.render('about', {
        Name: 'Tommy Vasquez',
        Title: 'Full Stack Javascript - Techdegree Student at Treehouse',
    });
});

module.exports = router;
