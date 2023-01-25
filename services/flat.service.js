const {Line,Flat,LineToFlat, User, Dot} = require("../models");
const axios = require("axios");
const util = require("../api/util/util");
const kakaoService = require("./kakao.service");

const findMyLineContent = async (req,res,next)=>{
    let token = util.converter(req.headers['authorization']);
    const id = await kakaoService.loginOrRegisteOrFindPk(token);
    const lines = await Line.findAll({where:{
            user_id:id
        }});
    if (lines.length === 0 || !lines){
        return res.status(400).json({"message": "문장을 먼저 등록해주세요"});
    }
    return res.status(200).json({"lines": lines});
}


const saveFlatContent = async (req, res, next)=> {
    const {flat_content, line_id} = req.body;
    const line_id_list = line_id.split(' ')
    let token = util.converter(req.headers['authorization']);
    const id = await kakaoService.loginOrRegisteOrFindPk(token);
    const newFlat = await Flat.create({
        user_id: id,
        flat_content: flat_content
    })
    for (let idx in line_id_list) {
        await LineToFlat.create({
            flat_id: newFlat.flat_id,
            line_id: Number(line_id_list[idx])
        })
    }
    return res.status(200).json({"message": newFlat});
}
const allFlat = async (req,res,next)=>{
    let token = util.converter(req.headers['authorization']);
    const id = await kakaoService.loginOrRegisteOrFindPk(token);
    const flats = await Flat.findAll({
        where:{
            user_id:id
        }
    })
    return res.status(200).json({"Flats": flats});
}


module.exports = {
    findMyLineContent,
    saveFlatContent,
    allFlat
}