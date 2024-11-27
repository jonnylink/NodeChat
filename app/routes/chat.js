const express = require('express');
const { chatFactory } = require('../chatFactory');

const router = express.Router();

router.post('/chat', async (req, res) => {
    try {
        const { message } = req.body;
        const { client } = req.query;

        if (!message) {
            return res.status(400).json({ error: 'Message is required' });
        }

        const chatClient = chatFactory(client);
        const reply = await chatClient(message);

        res.json({ reply });
    } catch (error) {
        console.error('Error interacting with API:', error.message);

        res.status(500).json({ error: `Failed to fetch response from ${system}` });
    }
});

module.exports = router;
