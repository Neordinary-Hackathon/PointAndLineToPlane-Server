const { Dot, Line, Flat } = require('../models');

const archiving = async (req, res, next) => {
  const dots = await Dot.findAll({
    order: [['createdAt', 'DESC']],
    limit: 10,
  });
  const lines = await Line.findAll({
    order: [['createdAt', 'DESC']],
    limit: 10,
  });
  const flats = await Flat.findAll({
    order: [['createdAt', 'DESC']],
    limit: 10,
  });
  res.status(200).json(
    Object.assign({
      dots: dots,
      lines: lines,
      flats: flats,
    })
  );
};

module.exports = {
  archiving,
};
