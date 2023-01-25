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
    },
    introduction:{
        defaultValue:"나를 표현하는 한줄 소개를 입력해주세요",
        type:DataTypes.STRING,
        allowNull:true
    }
},{
    timestamps: false
});

module.exports = User;