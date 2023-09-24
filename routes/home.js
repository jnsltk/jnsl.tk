const express = require('express');
const router = express.Router();

router.get('/', function(req, res, next) {
    res.render('home', { title: 'jnsl.tk | home' });
});

module.exports = router;

