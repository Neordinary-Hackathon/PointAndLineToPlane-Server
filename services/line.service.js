const {Line,Dot,DotToLine} = require("../models");
const kakaoService = require('./kakao.service.js');
const {NUMBER} = require("sequelize");

const findMyDotContent = async (req,res,next)=>{
    let token = req.headers['authorization'];
    token = token.replace(/^Bearer\s+/, "");
    const user = await kakaoService.findUserPk(token) // 카카오에서 aixos로 사용자 정보 가져오기
    const dots = await Dot.findAll({where:{
        user_id:user
    }});
    if (dots.length === 0 || !dots){
        return res.status(400).json({"message": "단어를 먼저 등록해주세요"});
    }
    return res.status(200).json({"dots": dots});
}



module.exports = {
    findMyDotContent,
}