const express = require('express');

const router = express.Router();
const homeController = require('../controllers/home_controller');

router.use(express.urlencoded({extended:true}));

console.log('Router loaded');

router.get('/', homeController.home);
router.use('/users', require('./users'));
router.use('/about', require('./about'));
router.use('/sign-up', require('./signup'));
router.use('/sign-in', require('./signin'));

//for any further routes, access from here
//router.use('/routerName', require('./routerFile'));

module.exports = router;