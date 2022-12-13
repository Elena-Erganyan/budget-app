const express = require('express');
const router = express.Router();

const { loginUser, registerUser, updateUser, verifyUser } = require('../controllers/userController');

// login
router.post('/login', loginUser);

// register a new user
router.post('/register', registerUser);

// verify the user
router.get('/confirm/:confirmationCode', verifyUser);

// update the user
router.patch('/:id', updateUser);

module.exports = router;
