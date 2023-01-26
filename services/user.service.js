const kakaoService = require('./kakao.service')
const util = require('../api/util/util')
const loginOrRegister = async (req,res,next)=>{
    let token = util.converter(req.headers['authorization']);
    console.log(token)
    const id = await kakaoService.loginOrRegisteOrFindPk(token)
    console.log(id)
    return res.status(200).json({"message":`${id} WELCOME!`})


const viewMyInfo = async (req,res,next)=>{
    let token = util.converter(req.headers['authorization']);
    const id = await kakaoService.loginOrRegisteOrFindPk(token)
    const myInfo = await User.findOne({
        where:{
            user_id:id
        }
    });
    res.status(200).json({myInfo})
}

const updateMyInfo = async (req,res,next)=>{
    let token = util.converter(req.headers['authorization']);
    const id = await kakaoService.loginOrRegisteOrFindPk(token)
    const myInfo = await User.update(
        {

        },{
            where:{
                user_id:id
            }
        });
    res.status(200).json({myInfo})
}

module.exports = {
    viewMyInfo,
    updateMyInfo
}