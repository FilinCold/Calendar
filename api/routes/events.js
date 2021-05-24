const express = require('express');
const router = express.Router();
const controller = require('../controllers/events');
const passport = require('passport');

router.post('/addevent', controller.addEvent);
router.post('/editevent', controller.editEvent);
router.get('/getevent', controller.getEvent);


module.exports = router;