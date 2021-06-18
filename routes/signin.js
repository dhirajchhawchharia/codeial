const express = require('express');

const router = express.Router();
const signInController = require('../controllers/sign_in_controller');

router.get('/', signInController.signInPage);
router.post('/details', signInController.signInForm);

module.exports = router;