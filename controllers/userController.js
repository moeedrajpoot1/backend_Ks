
const {v4:uuid}=require("uuid")
const userModel=require('../Models/userModels');
module.exports={
    createUser:async(req,res)=>{
        try {
        const IsUser= await userModel.getUser(false,req.body.userName)

        if(IsUser.error || !IsUser){
            return res.send({
                error:IsUser.error
            })}
         
         const user= await userModel.createUser(req.body)
         return res.send({
            response:user.response,
            message:"User Saved Successfully"
         })
        } catch (error) {
            return res.send({
                error:error.message
            })
        }
    },
    getAllUser:async(req,res)=>{
        try {
            const users= await userModel.getAllUser()
            
            if(users.error){
                res.send({
                    message:"Something Went Wrong",
                    error:users.error
                })
            }
            return res.send({
                response:users.response
            })
        } catch (error) {
            return res.send({
                error:error.message
            })
        }
    },
    deleteUser:async(req,res)=>{
        try {
           
            const user=await userModel.deleteUser(req.query.userId)
    
            if(user.error || !user.response){
                return res.send({
                    message:"Unable to delete User",
                    error:user?.error || user.response
                })
            }
            return res.send({
                message:"user Deleted",
                response:user.response
            })


        } catch (error) {
            return res.send({
                error:error
            })
        }
    },
    updateUser:async(req,res)=>{
        try {
            const update=req.body
            const user=await userModel.userUpdate({...update})
            if(user.error||!user){
                return res.send({
                    message:"Unable To Delete",
                    error:user?.error|| user.response
                })
            }
            return res.send({
                message:"User Updated",
                response:user.response

            })
            
        } catch (error) {
            return res.send({
                error:error
            })
        }
    }
}