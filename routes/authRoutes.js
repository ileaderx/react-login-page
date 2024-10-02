const express = require('express');
// const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../models/User');
const { verifyToken, isAdmin, isUser } = require('../middleware/auth');

const router = express.Router();
const JWT_SECRET = 'your_jwt_secret';

router.post('/register', async (req, res) => {
  const { username, password, role } = req.body;

  try {
    const existingUser = await User.findOne({ username });
    if (existingUser) {
      return res.status(400).json({ message: 'User already exists' });
    }

    const newUser = new User({
      username,
      password,
      role: role || 'user',
    });

    await newUser.save();

    res.status(201).json({ message: 'User registered successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Server error', error });
  }
});


router.post('/login', async (req, res) => {
  const { username, password } = req.body;
  try {
    const user = await User.findOne({ username });
    if (!user) {
      return res.status(401).json({ message: 'Invalid credentials' });
    }

    // const isMatch = await bcrypt.compare(password, user.password);
    const authenticated = await user.authenticate(password);
    if (!authenticated) {
      return res.status(401).json({ message: 'Invalid credentials' });
    }

    const token = jwt.sign({ userId: user._id, role: user.role }, JWT_SECRET, { expiresIn: '1h' });
    res.json({
      message: 'Login successful',
      token,
      user: {
        role: user.role,  // Assuming `role` is stored in the user model
      }
    });
  } catch (error) {
    res.status(500).json({ message: 'Server error', error });
  }
});

// Example of an admin-protected route
router.get('/admin-dashboard', verifyToken, isAdmin, (req, res) => {
  res.json({ message: 'Welcome to the admin dashboard' });
});

// Example of a user-protected route
router.get('/user-dashboard', verifyToken, isUser, (req, res) => {
  res.json({ message: 'Welcome to the user dashboard' });
});

module.exports = router;
