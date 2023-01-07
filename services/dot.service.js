const {Dot, User} = require('../models/index');
const axios = require("axios");
const {LineToFlat} = require("../models");


const saveDotContent = async (req, res, next)=>{
    const dot_content = req.body.dot_content;
    const dots_list = dot_content.split(' ')
    console.log(dot_content)
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
        for(let idx in dots_list){
            const newDot = await Dot.create({
                user_id:isUser.user_id,
                dot_content:dots_list[idx]
            })
        }

        return res.status(200).json({"message": "저장 완료"});
        })
}


module.exports = {
    saveDotContent
}