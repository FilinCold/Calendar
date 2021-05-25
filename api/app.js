const express = require('express');
const mongoose = require('mongoose');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const morgan = require('morgan');
const keys = require('./config/keys');
const passport = require('passport');

const authRoutes = require('./routes/auth');
const eventRoutes = require('./routes/events');

mongoose.connect(keys.mongoURI)
  .then(() => console.log(`==========>mongodb connected` ))
  .catch(error => console.log(`==========>error`, error));
app.use(passport.initialize())
require('./middleware/passport')(passport);
app.use(morgan('dev'));
app.use(cors());

app.use('/uploads', express.static('uploads'))
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());


app.use('/api/auth', authRoutes);
app.use('/api/event', eventRoutes);


module.exports = app;
