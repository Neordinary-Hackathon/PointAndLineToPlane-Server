const kakaoService = require('./kakao.service')

const register = async (req,res,next)=>{
    let token = req.headers['authorization'];
    token = token.replace(/^Bearer\s+/, "");

    const {newUserId} = kakaoService.findUserPk(token)
    return res.status(200).json({"message":`WELCOME!`})
}

module.exports = {
    register
}