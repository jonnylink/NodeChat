const express = require('express');
const { chatFactory } = require('../chatFactory');

const router = express.Router();

router.get('/koan', async (req, res) => {
    try {
        const { client } = req.query;

        const message = 'Tell me another zen koan. Do not include any additional commentary.';
        const chatClient = chatFactory(client);
        const reply = await chatClient(message);

        res.json({ reply });
    } catch (error) {
        console.error('Error interacting with API:', error.message);

        res.status(500).json({ error: 'Failed to fetch response from ChatGPT' });
    }
});

module.exports = router;
