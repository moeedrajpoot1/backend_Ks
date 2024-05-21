const sequelize=require("../bin/dbconnection")
const users=require('../Models/definations/usersModels')
const TaskTypes=require("../Models/definations/TaskType")
const usertasks=require("../Models/definations/userTasksModels")

const models={users,TaskTypes,usertasks}


const Db={}

Db.sequelize=sequelize
sequelize.models=models

module.exports={Db,models}