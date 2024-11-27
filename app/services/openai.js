const { OpenAI } = require('openai');

const openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY,
});

const chatGpt = async (message) => {
    const response = await openai.chat.completions.create({
        model: process.env.OPENAI_MODEL || 'gpt-4o-mini',
        messages: [{ role: 'user', content: message }],
    });

    return response.choices[0].message.content;
};

module.exports = { chatGpt };
