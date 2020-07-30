const express = require('express');
const router = express.Router();
const { data } = require('../data/data.json');
const Name = data.name;
const Introduction = data.introduction;
const { projects } = data;

/* GET project page. */
router.get('/:id', (req, res) => {
    const { id } = req.params;
    const { project_name } = projects[id];
    const { description } = projects[id];
    const { technologies } = projects[id];
    const { live_link } = projects[id];
    const { github_link } = projects[id];
    const { image_urls } = projects[id];

    const templateData = {
        Name,
        Introduction,
        id,
        project_name,
        description,
        technologies,
        live_link,
        github_link,
        image_urls,
    };

    // return res.redirect(`/projects/${id}`);

    res.render('project', templateData);
});

module.exports = router;
