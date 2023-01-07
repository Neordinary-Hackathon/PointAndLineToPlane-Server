const {Dot} = require('../models/index');
const kakaoService = require('./kakao.service.js')
const saveDotContent = async (req, res, next)=>{
    const dot_content = req.body.dot_content;
    console.log(dot_content)
    let token = req.headers['authorization'];
    token = token.replace(/^Bearer\s+/, "");
    const user = await kakaoService.findUserPk(token) // 카카오에서 aixos로 사용자 정보 가져오기
    const newDot = await Dot.create({
        user_id:user,
        dot_content:dot_content
    })
    return res.status(200).json({"message": newDot});
}
module.exports = {
    saveDotContent
}