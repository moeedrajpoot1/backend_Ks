const {Model,DataTypes}=require("sequelize")
const sequelize=require("../../bin/dbconnection")

class usertasks extends Model {}

usertasks.init({
    taskId:{
        primaryKey:true,
        type:DataTypes.STRING(20)
    },
    userId:{
        type:DataTypes.STRING(20)
    }
},{timestamps:true,paranoid:true,tableName:"usertasks",sequelize})

module.exports=usertasks;