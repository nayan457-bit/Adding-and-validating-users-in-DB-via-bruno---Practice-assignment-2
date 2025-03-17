const express = require('express');
const router = express.Router();
router.post('/register', (req, res) => {
  const { username, email, password } = req.body;
  if (!username || !email || !password) {
    return res.status(400).json({ message: 'Please provide username, email, and password' });
  }

  res.status(201).json({ message: 'User registered successfully', user: { username, email } });
});

module.exports = router;