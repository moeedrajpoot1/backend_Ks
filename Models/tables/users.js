const {Model,DataTypes}=require('sequelize')
const sequelize=require("../../bin/DbConnections")
const {hash}=require("bcryptjs")
const {v4:uuid}=require("uuid")
class users extends Model {}

users.init({
    userId:{
        primaryKey:true,
        
        type:DataTypes.STRING(),
        
    },
    userName:{
      
        allowNull:false,
        type:DataTypes.STRING()
    },
    role:{
        allowNull:false,
        defaultValue:"customer",
        type:DataTypes.ENUM,
        values:["customer","admin"]
    },
    password:{
        allowNull:false,
        type:DataTypes.STRING()
    },
  
},{timestamps:true,paranoid:true,tableName:"users",sequelize,})


module.exports = users
users.beforeCreate(async(user,option)=>{
user.password= await hash(user.password,10)
})

users.beforeCreate(async(user,option)=>{
    user.userId=uuid()
})

users.afterCreate(async(user,option)=>{
    delete user.dataValues.password
})
