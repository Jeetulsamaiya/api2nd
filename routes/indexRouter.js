var express = require('express');
var router = express.Router();

const {
homepage,
signup,
signin,
uploadimg
} = require('../controller/indexController')

const {isloggedin} = require('../utils/isloggedin')


cloudinary.config({ 
    cloud_name: 'dsgcdzw2t', 
    api_key: '425873366544436', 
    api_secret: 'EfL0gNPCfvP294XdNzQ1uuiYqdA'
  });

/*  @api GET home page. */
router.get('/',homepage)

router.post('/signup', signup)

router.post('/signin', signin)

router.post('/uploadimg', uploadimg)


module.exports = router;
