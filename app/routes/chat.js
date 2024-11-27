const express = require('express');
const { chat } = require('../services/openai');

const router = express.Router();

router.post('/chat', async (req, res) => {
    try {
        const { message } = req.body;

        if (!message) {
            return res.status(400).json({ error: 'Message is required' });
        }

        const reply = await chat(message);

        res.json({ reply });
    } catch (error) {
        console.error('Error interacting with OpenAI API:', error.message);
        res.status(500).json({ error: 'Failed to fetch response from ChatGPT' });
    }
});

module.exports = router;
