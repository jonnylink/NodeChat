const { OpenAI } = require('openai');

const openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY,
});

const chat = async (message) => {
    const model = process.env.OPENAI_MODEL || 'gpt-4o-mini';
    const response = await openai.chat.completions.create({
        model,
        messages: [{ role: 'user', content: message }],
    });

    return response.choices[0].message.content;
};

module.exports = {chat};
