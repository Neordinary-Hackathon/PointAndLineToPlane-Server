const Sequelize = require('sequelize');
const DataTypes = Sequelize.DataTypes;

const DotToLine = (sequelize) =>
  sequelize.define(
    'DotToLines',
    {
      dotToLine_id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      dot_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
      },
      line_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
      },
    },
    {
      timestamps: false,
    }
  );

module.exports = DotToLine;
