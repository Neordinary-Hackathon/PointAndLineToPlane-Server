const Sequelize = require('sequelize');
const DataTypes = Sequelize.DataTypes;

const Dot = (sequelize) => sequelize.define('Dots',{
    dot_id : {
        type:DataTypes.INTEGER,
        autoIncrement:true,
        primaryKey:true
    },
    dot_content:{
        type:DataTypes.STRING,
        allowNull:false
    }
},{
    timestamps: true
});

module.exports = Dot;