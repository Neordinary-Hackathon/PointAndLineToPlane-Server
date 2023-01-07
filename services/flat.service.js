const {Line,Flat,LineToFlat} = require("../models");
const kakaoService = require('./kakao.service.js');


const findMyLineContent = async (req,res,next)=>{
    let token = req.headers['authorization'];
    token = token.replace(/^Bearer\s+/, "");
    const user = await kakaoService.findUserPk(token) // 카카오에서 aixos로 사용자 정보 가져오기
    const lines = await Line.findAll({where:{
            user_id:user
        }});
    if (lines.length === 0 || !lines){
        return res.status(400).json({"message": "문장을 먼저 등록해주세요"});
    }
    return res.status(200).json({"lines": lines});
}

module.exports = {
    findMyLineContent,
}