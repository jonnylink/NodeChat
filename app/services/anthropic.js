const { Anthropic } = require('@anthropic-ai/sdk');

const anthropic = new Anthropic({
    apiKey: process.env.ANTHROPIC_API_KEY
});

const chatAnthropic = async (message) => {
    const response = await anthropic.messages.create({
        model: process.env.ANTHROPIC_MODEL || 'claude-3-5-haiku-20241022',
        max_tokens: 1024,
        messages: [{
            role: 'user',
            content: message,
        }],
    });

    return response.content[0].text;
};

module.exports = { chatAnthropic };
