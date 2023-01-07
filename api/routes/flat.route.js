const express = require('express');
const router = express.Router();
const flatService = require('../../services/flat.service.js');

router.get('/', (req, res, next) => {
    flatService.findMyLineContent(req, res, next);
});

router.post('/', (req, res, next) => {
    flatService.saveFlatContent(req, res, next);
});

module.exports = router;