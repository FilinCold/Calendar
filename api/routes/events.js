const express = require('express');
const router = express.Router();
const passport = require('passport');

const controller = require('../controllers/events');

router.post('/addevent', controller.addEvent);
router.put('/editevent', controller.editEvent);
router.get('/getevent', controller.getEvent);

module.exports = router;
