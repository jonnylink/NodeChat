const express = require('express');
const { chatFactory } = require('../chatFactory');
const { queryWeather } = require('../services/weather');

const router = express.Router();

router.get('/what-to-wear', async (req, res) => {
    try {
        const { client, zip } = req.query;

        if (!zip) {
            return res.status(400).json({ error: 'Zip code parameter `zip` is required' });
        }

        const weatherDetails = await queryWeather(zip);
        const message = `The weather forecast for today for zip code ${process.env.ZIP}
            is that it will be ${weatherDetails.summary}
            with a high of ${weatherDetails.maxTemp} and a low of ${weatherDetails.minTemp}.
            The wind will be ${weatherDetails.maxWind}.
            It will ${weatherDetails.willRain ? 'rain' : 'not rain'} and ${weatherDetails.willSnow ? 'snow' : 'not snow'}.
            Please suggest what kind of clothes I should wear today—don't mention shoes.
            Be brief, using 75 words or less. Include the day's high.`;
        const chatClient = chatFactory(client);
        const reply = await chatClient(message);

        res.json({ reply });
    } catch (error) {
        console.error('Error interacting with API:', error.message);

        res.status(500).json({ error: 'Failed to fetch response from ChatGPT' });
    }
});

module.exports = router;
