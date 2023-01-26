const express = require('express');
const router = express.Router();
const archivingService = require('../../services/archiving.service');

router.get('/', (req, res, next) => {
  return archivingService.archiving(req, res, next);
});

module.exports = router;
