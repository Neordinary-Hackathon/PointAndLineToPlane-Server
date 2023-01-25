const kakaoService = require('./kakao.service')



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