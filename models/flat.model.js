const Sequelize = require('sequelize');
const DataTypes = Sequelize.DataTypes;

const Flat = (sequelize) => sequelize.define('Flats',{
    flat_id : {
        type:DataTypes.INTEGER,
        autoIncrement:true,
        primaryKey:true
    },
    flat_content:{
        type:DataTypes.STRING,
        allowNull:false
    }
},{
    timestamps: false
});

module.exports = Flat;