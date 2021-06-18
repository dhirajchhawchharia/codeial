const express = require('express'); 

const router = express.Router();
const signOutController = require('../controllers/sign_out_controller');

router.get('/', signOutController.signOut);

module.exports = router;