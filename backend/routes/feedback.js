const express = require('express');
const router = express.Router();
const Feedback = require('../models/Feedback'); // Assuming you have a Feedback model

// Example feedback route
router.post('/', async (req, res) => {
    const { date, description } = req.body;

    try {
        // Create a new feedback entry
        const newFeedback = new Feedback({ date, description });
        await newFeedback.save();

        res.status(201).json({ success: true, message: 'Feedback received!' });
    } catch (error) {
        console.error("Error saving feedback:", error);
        res.status(500).json({ success: false, message: 'Failed to submit feedback' });
    }
});

module.exports = router;