const User = require('../models/user');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { JWT_SECRET, JWT_EXPIRES_IN } = require('../utils/config');
const { StatusCodes } = require('http-status-codes');

// signup controller
const signup = async (req, res) => {
  const { name, email, password } = req.body;

  const userExist = await User.findOne({ email });
  if (userExist) {
    return res
      .status(StatusCodes.BAD_REQUEST)
      .json({ msg: 'User already exists' });
  }

  const hashedPassword = await bcrypt.hash(password, 10);
  const user = new User({ name, email, password: hashedPassword });
  await user.save();

  res.status(201).json({ msg: 'User registered successfully' });
};

// login controller
const login = async (req, res) => {
  const { email, password } = req.body;

  const user = await User.findOne({ email });
  const passwordCorrect =
    user === null ? false : await bcrypt.compare(password, user.password);
  if (!(user && passwordCorrect)) {
    return res
      .status(StatusCodes.UNAUTHORIZED)
      .json({ msg: 'invalid email or password' });
  }
  const userForToken = {
    email: user.email,
    name: user.name,
    id: user._id,
  };
  const token = jwt.sign(userForToken, JWT_SECRET, {
    expiresIn: 24 * 60 * 60 * 7,
  });

  res
    .status(StatusCodes.OK)
    .json({ msg: 'Login successful', user: userForToken, token });
};

const getAllUsers = async (req, res) => {
  const users = await User.find({}).populate('blogs');

  res.status(StatusCodes.OK).json({ users });
};
module.exports = { signup, login, getAllUsers };
