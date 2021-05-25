const express = require('express');
const router = express.Router();
const passport = require('passport');

const controller = require('../controllers/auth');

router.post('/login', controller.login);
router.post('/register', controller.register);
router.get('/getuser', controller.getUser);
router.put('/editprofile', controller.editProfile);

module.exports = router;
