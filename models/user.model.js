const Sequelize = require('sequelize');
const DataTypes = Sequelize.DataTypes;

const User = (sequelize) => sequelize.define('Users',{
    user_id : {
        type:DataTypes.INTEGER,
        autoIncrement:true,
        primaryKey:true
    },
    nickname:{
        type:DataTypes.STRING,
        allowNull:false
    },
    gender:{
        type:DataTypes.STRING,
        allowNull:true
    },
    age:{
        type:DataTypes.INTEGER,
        allowNull:true
    }
},{
    timestamps: false
});

module.exports = User;