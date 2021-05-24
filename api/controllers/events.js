const Event = require('../models/Events');
const errorHandler = require('../utils/errorHandler');

module.exports.addEvent = async function (req, res) {

  const event = new Event({
    start: req.body.start,
    end: req.body.end,
    title: req.body.title,
  })
  try {
    console.log(`==========>event`, event);
    await event.save();
    res.status(201).json(event);
  } catch (e) {
    errorHandler(res, e);
  }
}

module.exports.getEvent = async function (req, res) {
  try {
    const events = await Event.find();
    res.status(201).json(events);
  } catch (e) {
    errorHandler(res, e);
  }
}

module.exports.editEvent = async function (req, res) {
  try {
    const event = await Event.findOne({
      _id: req.body._id
    });

    event.save();
    res.status(201).json(event);
  } catch (e) {
    errorHandler(res, e);
  }
}