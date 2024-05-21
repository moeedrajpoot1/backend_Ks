const {Model,DataTypes}=require("sequelize")
const sequelize=require("../../bin/dbconnection")

class users extends Model {}

users.init({
    userId:{
        primaryKey:true,
        type:DataTypes.STRING(20)
    },
    userName:{
        unique:true,
        allowNull:false,
        type:DataTypes.STRING(20)
    }
},{timestamps:true,paranoid:true,tableName:"users",sequelize})


module.exports=users;