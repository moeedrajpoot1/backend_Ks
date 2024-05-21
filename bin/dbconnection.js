require("dotenv").config()
const {Sequelize}=require("sequelize")
const colors=require("colors")

const sequelize= new Sequelize({
database:process.env.DB_NAME,
username:process.env.DB_USERNAME,
password:process.env.DB_PASSWORD,
host:process.env.DB_HOST,
dialect:process.env.DB_DIALECT,
port:process.env.DB_PORT

})
sequelize.authenticate().then(()=>{
    console.log("connected to db".bgBlue)
}).catch(err=>{console.log(err,"Db Connection Failed".bgRed)});






module.exports=sequelize;