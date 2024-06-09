const sequelize=require("../bin/DbConnections");
const tasks=require("./tables/tasks")
const users=require("./tables/users")
const session=require("./tables/sessions")

const models={tasks,users,session}


users.hasMany(tasks,{foreignKey:"userId"})
tasks.belongsTo(users,{foreignKey:"userId"})


users.hasOne(session,{foreignKey:"userId"})
session.belongsTo(users,{foreignKey:"userId"})

const Db={}

Db.sequelize=sequelize
sequelize.models=models

module.exports={Db,models}