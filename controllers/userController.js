const User = require('../models/userModel');
const jwt = require('jsonwebtoken');

const createToken = (_id) => {
  return jwt.sign({_id}, process.env.SECRET, { expiresIn: '3d' });
};

// login
const loginUser = async (req, res) => {
  const { email, password } = req.body;
  
  try {
    const user = await User.login(email, password);

    // create a token
    const token = createToken(user._id);

    res.status(200).json({ email, id: user._id, token, theme: user.theme, createdAt: user.createdAt });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// register a new user
const registerUser = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.register(email, password);

    // create a token
    const token = createToken(user._id);

    res.status(200).json({ email, id: user._id, token, theme: user.theme, createdAt: user.createdAt });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// update the user
const updateUser = async (req, res) => {
  const { id } = req.params;
  
  const user = await User.findByIdAndUpdate(id, {...req.body}, {new: true});

  if (!user) {
    return res.status(404).json({error: 'No such user'});
  } 

  res.status(200).json({ email: user.email, id: user._id, token: user.token, theme: user.theme, createdAt: user.createdAt });
};

module.exports = { loginUser, registerUser, updateUser };
