const {Model,DataTypes}=require("sequelize")
const sequelize=require("../../bin/dbconnection")

class TaskTypes extends Model{}


TaskTypes.init({
    TaskId:{
        primaryKey:true,
        type:DataTypes.STRING(20)
    },
    typeName:{
        allowNull:false,
        unique:true,
        type:DataTypes.STRING(20)

    },
    Description:{
        type:DataTypes.STRING(500),
        allowNull:false,
    },
   
},{timestamps:true,paranoid:true,tableName:"TaskTypes",sequelize})


module.exports = TaskTypes