const express = require('express');
const router = express.Router();
const dotService = require('../../services/dot.service');

router.post('/', (req, res, next) => {
    return dotService.saveDotContent(req, res, next);
});

module.exports = router;