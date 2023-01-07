const {Line,Dot,DotToLine} = require("../models");
const kakaoService = require('./kakao.service.js');

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


const saveLineContent = async (req, res, next)=>{
    const {line_content, dot_id} = req.body;
    const dot_id_list = dot_id.split(' ')
    let token = req.headers['authorization'];
    token = token.replace(/^Bearer\s+/, "");
    const user = await kakaoService.findUserPk(token) // 카카오에서 aixos로 사용자 정보 가져오기

    const newLine = await Line.create({
        user_id:user,
        line_content:line_content
    })
    for(let idx in dot_id_list){
        await DotToLine.create({
            line_id : newLine.line_id,
            dot_id:Number(dot_id_list[idx])
        })
    }

    return res.status(200).json({"message": newLine});

}

module.exports = {
    findMyDotContent,
    saveLineContent
}