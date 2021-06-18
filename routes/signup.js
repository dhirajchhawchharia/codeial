const express = require('express');

const router = express.Router();
const signUpController = require('../controllers/sign_up_controller');

router.get('/', signUpController.signUpPage);
router.post('/create', signUpController.createUser);

module.exports = router;