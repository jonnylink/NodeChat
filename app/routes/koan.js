const express = require('express');
const { chat } = require('../services/openai');

const router = express.Router();

router.get('/koan', async (_, res) => {
    try {
        const message = 'Tell me another zen koan. Do not include any additional commentary.';
        const reply = await chat(message);

        res.json({ reply });
    } catch (error) {
        console.error('Error interacting with OpenAI API:', error.message);
        res.status(500).json({ error: 'Failed to fetch response from ChatGPT' });
    }
});

module.exports = router;
