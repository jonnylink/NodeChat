const express = require('express');

const router = express.Router();

router.get('/health', (_, res) => {
    res.send('ok');
});

module.exports = router;
