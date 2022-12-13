const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const validator = require('validator');

const Schema = mongoose.Schema;

const userSchema = new Schema({
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  isActive: {
    type: Boolean, 
    default: false,
  },
  confirmationCode: { 
    type: String, 
    unique: true,
  },
  theme: {
    type: String,
    default: 'light',
  },
}, { timestamps: true });

// static register method
userSchema.statics.register = async function (email, password, token) {
  // validation
  if (!email || !password) {
    throw Error('All fields must be filled');
  }
  if (!validator.isEmail(email)) {
    throw Error('Email is not valid');
  }
  if (!validator.isStrongPassword(password)) {
    throw Error('Password is not strong enough');
  }

  const exists = await this.findOne({ email });

  if (exists) {
    throw Error('Email is already in use');
  }

  const salt = await bcrypt.genSalt(10);
  const hash = await bcrypt.hash(password, salt);

  const user = await this.create({ email, password: hash, confirmationCode: token });

  return user;
};

// static login method
userSchema.statics.login = async function (email, password) {
  // validation
  if (!email || !password) {
    throw Error('All fields must be filled');
  }

  const user = await this.findOne({ email });
  
  if (!user) {
    throw Error('Incorrect email');
  }

  const match = await bcrypt.compare(password, user.password);

  if (!match) {
    throw Error('Incorrect password');
  }

  if (!user.isActive) {
    throw Error('Pending account. Please verify your email');
  }

  return user;
};

module.exports = mongoose.model('User', userSchema);
