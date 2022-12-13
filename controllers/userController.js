const User = require('../models/userModel');
const jwt = require('jsonwebtoken');
const nodemailer = require("nodemailer");

const createToken = (_id) => {
  return jwt.sign({_id}, process.env.SECRET, { expiresIn: '3d' });
};

const transport = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.USER,
    pass: process.env.PASS,
  },
});

// login
const loginUser = async (req, res) => {
  const { email, password } = req.body;
  
  try {
    const user = await User.login(email, password);

    // create a token
    const token = createToken(user._id);

    res.status(200).json({ email, _id: user._id, token, theme: user.theme, createdAt: user.createdAt });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// register a new user
const registerUser = async (req, res) => {
  const { email, password } = req.body;
  const host = req.protocol + '://' + (req.hostname === 'localhost' ? 'localhost:3000' : req.get('host'));

  // create a token
  const token = createToken(email);

  try {
    const user = await User.register(email, password, token);

    const userName = user.email.split('@')[0];

    transport.sendMail({
      from: process.env.USER,
      to: user.email,
      subject: 'Please confirm your account',
      html: `<div>
               <h1>Email Confirmation</h1>
               <h2>Hello ${userName}</h2>
               <p>Thank you for subscribing. Please confirm your email by clicking on the following link</p>
               <a href=${host}/confirm/${user.confirmationCode}>Click here</a>
             </div>`,
      }).catch(err => console.log(err));

    res.status(200).json({ message: 'User was registered successfully! Please check your email'});
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// verify a new user
const verifyUser = async (req, res) => {
  const { confirmationCode } = req.params;

  let user = await User.findOne({ confirmationCode });

  if (!user) {
    return res.status(404).json({message: 'No such user'});
  } else if (user.isActive) {
    return res.status(400).json({message: 'Your email was already confirmed'});
  }

  user = await User.findOneAndUpdate({ confirmationCode }, {isActive: true}, {new: true});

  res.status(200).json({message: 'Your account successfully confirmed'});
};

// update the user
const updateUser = async (req, res) => {
  const { id } = req.params;
  
  const user = await User.findByIdAndUpdate(id, {...req.body}, {new: true});

  if (!user) {
    return res.status(404).json({error: 'No such user'});
  } 

  res.status(200).json({...user});
};

module.exports = { loginUser, registerUser, updateUser, verifyUser };
