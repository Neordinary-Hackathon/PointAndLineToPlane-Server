require('dotenv').config()
const {User} = require('../models')
const axios = require('axios')
const kakaoTokenURL = `${process.env.KAKAO_BASEURL}token?grant_type=authorization_code&client_id=${process.env.KAKAO_RESTAPI_KEY}&redirect_uri=${process.env.KAKAO_REDIRECT_URI}`


const getToken = async (req,res,next)=>{
    const code = req.body.code
    await axios({
        method: 'post',
        url:kakaoTokenURL+`&code=${code}`
    }).then((result)=>{
        return res.status(200).json(result.data)
    }).catch((err)=>{
        return res.status(400).json(err)
    })
}

const findUserPk = async (token) =>{
    await axios({
        method:'get',
        url:'https://kapi.kakao.com/v2/user/me',
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
        if(!isUser || typeof isUser === 'undefined'){
            const newUser = await User.create({
                unique_id:resultId,
                nickname:result.data.properties.nickname
            })
            return newUser.user_id
        } else {
            return isUser.user_id
        }
    })
}

module.exports = {
    findUserPk,
    getToken,
    }