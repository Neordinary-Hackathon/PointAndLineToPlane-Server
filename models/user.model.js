const Sequelize = require('sequelize');
const DataTypes = Sequelize.DataTypes;

const User = (sequelize) => sequelize.define('Users',{
    user_id : {
        type:DataTypes.INTEGER,
        autoIncrement:true,
        primaryKey:true
    },
    unique_id:{
        type:DataTypes.STRING,
        allowNull:false
    },
    nickname:{
        type:DataTypes.STRING,
        allowNull:false
    },
    gender:{
        defaultValue:null,
        type:DataTypes.STRING,
        allowNull:true
    },
    age:{
        defaultValue:null,
        type:DataTypes.INTEGER,
        allowNull:true
    }
},{
    timestamps: false
});

module.exports = User;