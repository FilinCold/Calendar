const express = require('express');
const mongoose = require('mongoose');
const authRoutes = require('./routes/auth');
const eventRoutes = require('./routes/events');
// const postRoutes = require('./routes/post');
// const profileRoutes = require('./routes/profile');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const morgan = require('morgan');
const keys = require('./config/keys');
const passport = require('passport');


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

// app.use('/api/addpost', postRoutes);
app.use('/api/auth', authRoutes);
app.use('/api/event', eventRoutes);
// app.use('/api/profile', profileRoutes);

module.exports = app;