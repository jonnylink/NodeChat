const express = require('express');
const { chatFactory } = require('../chatFactory');

const router = express.Router();

router.get('/magic', async (req, res) => {
    try {
        const { client } = req.query;
        const message = 'Write a short piece of magical realism that is 200 words or less.';
        const chatClient = chatFactory(client);
        const reply = await chatClient(message);

        res.json({ reply });
    } catch (error) {
        console.error('Error interacting with API:', error.message);

        res.status(500).json({ error: 'Error.' });
    }
});

module.exports = router;
