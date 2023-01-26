const express = require('express');
const router = express.Router();
const kakaoService = require('../../services/kakao.service')
const userService = require('../../services/user.service')


router.post('/auth', (req, res, next) => {
    kakaoService.getToken(req, res, next);
});
router.post('/register', (req, res, next) => {
    kakaoService.loginOrRegisterOrFindPk(req, res, next);
});

router.post('/my-page', (req, res, next) => {
    return userService.updateMyInfo(req, res, next);
});



module.exports = router;