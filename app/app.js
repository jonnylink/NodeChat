const express = require('express');
const chatRouter = require('./routes/chat');
const healthRouter = require('./routes/health');
const koanRouter = require('./routes/koan');
const magicRealismRouter = require('./routes/magic');
const weatherRouter = require('./routes/weather');

const app = express();
app.use(express.json());

app.use('/', chatRouter);
app.use('/', healthRouter);
app.use('/', koanRouter);
app.use('/', magicRealismRouter);
app.use('/', weatherRouter);

module.exports = app;
