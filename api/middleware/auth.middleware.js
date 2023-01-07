const axios = require('axios')

const authenticate = async (req,res,next)=>{
    let token = req.headers['authorization'];
    if (!token || typeof token==='undefined'){
        return res.status(400).json({"message":"로그인 정보를 확인해 주세요."})
    }
    token = token.replace(/^Bearer\s+/, "");

    await axios({
        method:'get',
        url:'https://kapi.kakao.com/v1/user/access_token_info',
        headers:{
            Authorization: `Bearer ${token}`
        }
    }).then((result)=>{
        console.log(result.data)
        if(result.data.id){
            next();
        } else {
            return res.status(400).json({"message":"로그인 정보를 확인해 주세요."})
        }
    }).catch((err)=>{
        return res.status(400).json({"message":"로그인 정보를 확인해 주세요."})
    })

}

module.exports = authenticate;
