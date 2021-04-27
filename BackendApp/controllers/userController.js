const asyncHandler = require('express-async-handler');
const User = require('../models/userModel');
const messages = '../config/messages';
const jwt = require('jsonwebtoken');

const signToken = (id) => {
  return jwt.sign({ id }, '123abc', {
    expiresIn: '1d'
  });
};

exports.signup = asyncHandler(async (req, res, next) => {
  const { name, email, password } = req.body;

  const newUser = await User.create({
    name,
    email,
    password,
  });

  const url = `${req.protocol}://${req.get('host')}/me`;
  console.log(url);
  res.status(201).json({
    status: 'success',
    data: {
      newUser
    }
  });
});

exports.login = asyncHandler(async (req, res, next) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return next(new Error('Please provide email and password!', 400));
  }

  const user = await User.findOne({ email }).select('+password');

  if (!user || !(await user.matchPassword(password, user.password))) {
    return next(new Error('Incorrect email or password', 401));
  }
  const token = signToken(user._id);
  user.password = undefined;
  req.user = user;

  res.status(200).json({
    status: 'success',
    token,
    data: {
      user
    }
  });

});

