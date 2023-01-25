const kakaoService = require('./kakao.service')
const util = require('../api/util/util')
const loginOrRegister = async (req,res,next)=>{
    let token = util.converter(req.headers['authorization']);
    console.log(token)
    const id = await kakaoService.loginOrRegisteOrFindPk(token)
    console.log(id)
    return res.status(200).json({"message":`${id} WELCOME!`})

}

module.exports = {
    loginOrRegister
}