var express = require('express');
var router = express.Router();

const {
homepage
} = require('../controller/indexController')

/*  @api GET home page. */
router.get('/', homepage)

module.exports = router;
