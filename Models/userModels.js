const {models}=require("./index")  


module.exports={
    createUser:async(body)=>{
        try {
            const user=await models.users.create({...body})
            return {
                response:user
            }
        } catch (error) {
            return{
                error:error
            }
        }
    },
    getUser:async(userId,userName)=>{
        try {
            const user=await models.users.findOne({...(userId ?{where:{userId:userId}}:{where:{userName:userName}}),
            attributes:{
                exclude:["deletedAt","createdAt","updatedAt"]
            }
        })
            return {
                response:user
            }
        } catch (error) {
            return{
                error:error
            }
        }
    },
    getAllUser:async()=>{
        try {
            const users=await models.users.findAll()
            console.log(users,"newwwwwwwwwwwww")
            return{
                response:users
            }
        } catch (error) {
            return{
                error:error
            }
        }
    },
    deleteUser:async(userId)=>{
        try {
            const users=await models.users.destroy({where:{userId:userId}})
            return {
                response:users
            }
        } catch (error) {
            return{
                error:error
            }
        }
    },
    userUpdate:async({userId,...body})=>{
        try {
            const update=await models.users.update({...body},{where:{userId:userId}})
            return {
                response:update
            }
        } catch (error) {
            return{
                error:error
            }
        }
    }
}