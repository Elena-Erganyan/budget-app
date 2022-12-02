const express = require('express');
const router = express.Router();

const {loginUser, registerUser, updateUser} = require('../controllers/userController');

// login
router.post('/login', loginUser);

// register a new user
router.post('/register', registerUser);

// update the user
router.patch('/:id', updateUser);

module.exports = router;
