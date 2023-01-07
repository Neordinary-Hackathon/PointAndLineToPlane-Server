const {Line,Dot,DotToLine, User} = require("../models");
const axios = require("axios");

const findMyDotContent = async (req,res,next)=>{
    let token = req.headers['authorization'];
    token = token.replace(/^Bearer\s+/, "");
    await axios({
        method:'get',
        url:'https://kapi.kakao.com/v1/user/access_token_info',
        headers:{
            Authorization: `Bearer ${token}`
        }
    }).then(async (result)=>{
        const resultId = String(result.data.id)
        const isUser = await User.findOne({
            where:{
                unique_id:resultId
            }
        })
        if(!isUser || typeof isUser === 'undefined'){}
        const dots = await Dot.findAll({where:{
                user_id:isUser.user_id
            }});
        if (dots.length === 0 || !dots){
            return res.status(400).json({"message": "단어를 먼저 등록해주세요"});
        }
        return res.status(200).json({"dots": dots});
    })

}


const saveLineContent = async (req, res, next)=>{
    const {line_content, dot_id} = req.body;
    const dot_id_list = dot_id.split(' ')
    let token = req.headers['authorization'];
    token = token.replace(/^Bearer\s+/, "");
    await axios({
        method:'get',
        url:'https://kapi.kakao.com/v1/user/access_token_info',
        headers:{
            Authorization: `Bearer ${token}`
        }
    }).then(async (result)=>{
        const resultId = String(result.data.id)
        const isUser = await User.findOne({
            where:{
                unique_id:resultId
            }
        })
        if(!isUser || typeof isUser === 'undefined'){}
        const newLine = await Line.create({
            user_id:isUser.user_id,
            line_content:line_content
        })
        for(let idx in dot_id_list){
            await DotToLine.create({
                line_id : newLine.line_id,
                dot_id:Number(dot_id_list[idx])
            })
        }

        return res.status(200).json({"message": newLine});
    })
}

module.exports = {
    findMyDotContent,
    saveLineContent
}