const { chatGpt } = require('./services/openai');
const { chatAnthropic } = require('./services/anthropic');

const chatFactory = (client) => {
    if (client.toLowerCase() === 'anthropic') {
        return chatAnthropic;
    } else {
        return chatGpt;
    }
};

module.exports = { chatFactory };
