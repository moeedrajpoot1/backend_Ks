const {Model,DataTypes}=require("sequelize")
const sequelize = require("../../bin/DbConnections")
const users=require('../../Models/tables/users')
const {v4:uuid}=require("uuid")
class tasks extends Model{}

tasks.init({
taskId:{
    primaryKey:true,
    type:DataTypes.STRING(255)
},
taskName:{
    allowNull:false,
    type:DataTypes.STRING(255)
},
description:{
    allowNull:true,
    type:DataTypes.STRING(255)
},
userId:{
    type:DataTypes.STRING(255),
    allowNull:false,
   
    references:{
        
        model:users,
        key:"userId"
    }
}

}

,{timestamps:true,paranoid:true,tableName:"tasks",sequelize})



module.exports=tasks
tasks.beforeCreate(async(task,option)=>{
    task.taskId=uuid()
})
