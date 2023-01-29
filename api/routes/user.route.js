const express = require('express');
const router = express.Router();
const kakaoService = require('../../services/kakao.service');
const userService = require('../../services/user.service');
const authenticate = require('../middleware/auth.middleware')
router.post('/auth', (req, res, next) => {
  kakaoService.getToken(req, res, next);
});
router.post('/register', (req, res, next) => {
  kakaoService.loginOrRegisterOrFindPk(req, res, next);
});

router.get('/my-page', authenticate,(req, res, next) => {
  return userService.viewMyInfo(req, res, next);
});
router.post('/my-page', authenticate,(req, res, next) => {
  return userService.updateMyInfo(req, res, next);
});

module.exports = router;
