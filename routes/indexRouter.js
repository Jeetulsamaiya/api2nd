var express = require('express');
var router = express.Router();

const {
homepage,
signup,
signin
} = require('../controller/indexController')

const {isloggedin} = require('../utils/isloggedin')

/*  @api GET home page. */
router.get('/',homepage)

router.post('/signup', signup)

router.post('/signin', signin)

module.exports = router;
