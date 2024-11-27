const express = require('express');
const { chat } = require('../services/openai');

const router = express.Router();

router.get('/magic', async (_, res) => {
    try {
        const message = 'Write a short piece of magical realism that is 200 words or less.';

        const reply = await chat(message);
        res.json({ reply });
    } catch (error) {
        console.error('Error interacting with OpenAI API:', error.message);
        res.status(500).json({ error: 'Failed to fetch response from ChatGPT' });
    }
});

module.exports = router;
