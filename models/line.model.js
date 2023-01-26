const Sequelize = require('sequelize');
const DataTypes = Sequelize.DataTypes;

const Line = (sequelize) =>
  sequelize.define(
    'Lines',
    {
      line_id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      line_content: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    {
      timestamps: true,
    }
  );

module.exports = Line;
