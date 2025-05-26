const express = require('express');
const router = express.Router();
const Admin = require('../models/Admin'); // path to your Admin model
const { sendWelcomeEmail } = require('../services/emailService');

// POST /admin/signup
router.post('/signup', async (req, res) => {
  const { email, username, password } = req.body;

  try {
    // Check if admin already exists
    const existing = await Admin.findOne({ email });
    if (existing) {
      return res.status(400).json({ error: 'Admin already exists' });
    }

    // Create new admin
    const newAdmin = new Admin({ email, username, password });
    await newAdmin.save();

    // Send Welcome Email
    await sendWelcomeEmail(email, username);

    res.status(201).json({ message: 'Admin signed up successfully' });
  } catch (err) {
    console.error('Signup error:', err);
    res.status(500).json({ error: 'Signup failed' });
  }
});

module.exports = router;
