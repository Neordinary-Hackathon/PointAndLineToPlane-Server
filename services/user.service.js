const { Dot, User, Flat, Line } = require('../models');
const kakaoService = require('./kakao.service');
const util = require('../api/util/util');

const viewMyInfo = async (req, res, next) => {
  let token = util.converter(req.headers['authorization']);
  const id = await kakaoService.loginOrRegisterOrFindPk(token);
  const countInfo = await findMyWriteCount(id);
  const myInfo = await User.findOne({
    raw: true,
    where: {
      user_id: id,
    },
  });
  console.log('return : ', myInfo);

  res.status(200).json(Object.assign(myInfo, countInfo));
};
const findMyWriteCount = async (id) => {
  const myDotCount = await Dot.findAndCountAll({
    raw: true,
    where: {
      user_id: id,
    },
  });
  const myLineCount = await Line.findAndCountAll({
    raw: true,
    where: {
      user_id: id,
    },
  });
  const myFlatCount = await Flat.findAndCountAll({
    raw: true,
    where: {
      user_id: id,
    },
  });

  return Object.assign({
    dots: myDotCount.count,
    lines: myLineCount.count,
    flats: myFlatCount.count,
  });
};
const updateMyInfo = async (req, res, next) => {
  const { nickname, introduce } = req.body;
  let token = util.converter(req.headers['authorization']);
  const id = await kakaoService.loginOrRegisterOrFindPk(token);
  const myInfo = await User.update(
    {
      nickname,
      introduce,
    },
    {
      where: {
        user_id: id,
      },
    }
  );
  res.status(200).json({ message: '변경되었습니다.' });
};

module.exports = {
  viewMyInfo,
  updateMyInfo,
};
