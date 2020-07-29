const express = require('express');
const router = express.Router();
const { data } = require('../data/data.json');
const { name } = data;
const { title } = data;
const { introduction } = data;
const { bio } = data;
const { skills } = data;
const { phone } = data;
const { email } = data;

/* GET about listing. */
router.get('/', (req, res, next) => {
    res.render('about', {
        Name: name,
        Title: title,
        Intros: introduction,
        Bios: bio,
        Skills: skills,
        Phone: phone,
        Email: email,
    });
});

module.exports = router;
