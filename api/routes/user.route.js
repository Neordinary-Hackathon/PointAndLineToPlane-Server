const express = require('express');
const router = express.Router();
const kakaoService = require('../../services/kakao.service')
const userService = require('../../services/user.service')


router.post('/auth', (req, res, next) => {
    kakaoService.getToken(req, res, next);
});
router.post('/register', (req, res, next) => {
    userService.loginOrRegister(req, res, next);
});

module.exports = router;