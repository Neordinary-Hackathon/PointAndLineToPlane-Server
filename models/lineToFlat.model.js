const Sequelize = require('sequelize');
const DataTypes = Sequelize.DataTypes;

const LineToFlat = (sequelize) => sequelize.define('LineToFlats',{
    lineToFlat_id : {
        type:DataTypes.INTEGER,
        autoIncrement:true,
        primaryKey:true
    },
    flat_id : {
        type:DataTypes.INTEGER,
        primaryKey:true
    },
    line_id:{
        type:DataTypes.INTEGER,
        primaryKey:true
    }
},{
    timestamps: false
});

module.exports = LineToFlat;