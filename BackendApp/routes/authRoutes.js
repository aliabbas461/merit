var express = require('express');
var router = express.Router();

const userController = require('../controllers/userController');

router.route('/signup').post(userController.signup)
router.use('/login', userController.login);

module.exports = router;
