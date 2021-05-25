const User = require('../models/User');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const keys = require('../config/keys');

const errorHandler = require('../utils/errorHandler');

module.exports.login = async function (req, res) {
  const candidate = await User.findOne({email: req.body.email})
  if (candidate) {
    // check password, user found
    const passwordResult = bcrypt.compareSync(req.body.password, candidate.password);
    if (passwordResult) {
      // generation token, password equal
      const token = jwt.sign({
        email: candidate.email,
        userId: candidate._id
      }, keys.jwt, {expiresIn: 60 * 60});

      res.status(200).json({
        token: `Bearer ${token}`
      });
    } else {
      // password not equal
      res.status(401).json({
        message: 'Password not equal'
      });
    }
  } else {
    // user not found
    res.status(404).json({
      message: 'Email not found',
    })
  }
};

module.exports.register = async function (req, res) {
  console.log(`==========>req`, req);
  const candidate = await User.findOne({email: req.body.email});
  if (candidate) {
    res.status(409).json({
      message: 'Email is busy. Try other email'
    })
  } else {
    const salt = bcrypt.genSaltSync(10);
    const password = req.body.password;
    const user = new User({
      name: req.body.name,
      email: req.body.email,
      password: bcrypt.hashSync(password, salt),
    })

    try {
      await user.save();
      res.status(201).json(user)
    } catch (e) {
      errorHandler(res, e)
    }
  }
};

module.exports.getUser = async function (req, res) {
  try {
    const user = await User.find();
    res.status(201).json(user);
  } catch (e) {
    errorHandler(res, e);
  }
};

module.exports.editProfile = async function (req, res) {
  console.log(`==========>req.body`, req.body);

  const user = await User.findOne({
    _id: req.body.id,
  })
  try {
    console.log(`==========>user`, user);
    user.aboutMe = req.body.aboutMe
    await user.save();
    res.status(201).json(user);
  } catch (e) {
    errorHandler(res, e);
  }
};
