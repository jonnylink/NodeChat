const express = require('express');
const { chat } = require('../services/openai');
const { queryWeather } = require('../services/weather');

const router = express.Router();

router.get('/what-to-wear', async (_, res) => {
    try {
        const weatherDetails = await queryWeather();
        const message = `The weather forecast for today for zip code ${process.env.ZIP}
            is that it will be ${weatherDetails.summary}
            with a high of ${weatherDetails.maxTemp} and a low of ${weatherDetails.minTemp}.
            The wind will be ${weatherDetails.maxWind}.
            It will ${weatherDetails.willRain ? 'rain' : 'not rain'} and ${weatherDetails.willSnow ? 'snow' : 'not snow'}.
            Please suggest what kind of clothes I should wear today—don't mention shoes.
            Be brief, using 75 words or less. Include the day's high.`;

        const reply = await chat(message);

        res.json({ reply });
    } catch (error) {
        console.error('Error interacting with OpenAI API:', error.message);

        res.status(500).json({ error: 'Failed to fetch response from ChatGPT' });
    }
});

module.exports = router;
