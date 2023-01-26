const { Dot } = require('../models/index');
const kakaoService = require('./kakao.service');
const util = require('../api/util/util');

const saveDotContent = async (req, res, next) => {
  const dot_content = req.body.dot_content;
  const dots_list = dot_content.split(' ');
  let token = util.converter(req.headers['authorization']);
  const id = await kakaoService.loginOrRegisterOrFindPk(token);
  for (let idx in dots_list) {
    await Dot.create({
      user_id: id,
      dot_content: dots_list[idx],
    });
  }
  return res.status(200).json({ message: '저장 완료' });
};

module.exports = {
  saveDotContent,
};
