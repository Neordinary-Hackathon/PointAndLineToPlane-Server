const express = require('express');
const router = express.Router();
const lineService = require('../../services/line.service.js');

router.get('/', (req, res, next) => {
    lineService.findMyDotContent(req, res, next);
});

router.post('/', (req, res, next) => {
    lineService.saveLineContent(req, res, next);
});

module.exports = router;