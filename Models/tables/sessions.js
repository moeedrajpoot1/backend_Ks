const {Model,DataTypes}=require("sequelize")
const sequelize=require("../../bin/DbConnections")
const users=require("./users")
const{v4:uuid}=require("uuid")
class session extends Model {}
session.init({
  sessionId:{
    primaryKey:true,
    type:DataTypes.STRING(),
  },
  token:{
    allowNull:false,
    type:DataTypes.STRING()
  },  
   userId:{
    type:DataTypes.STRING(),
    allowNull:false,
    unique:true,
    references:{
        model:users,
        key:"userId"
    }
}




},{tableName:"session",sequelize})

module.exports=session
session.beforeCreate(async(session,option)=>{
  session.sessionId=uuid()
})