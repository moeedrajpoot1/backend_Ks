require("dotenv").config()
const {verify}=require("jsonwebtoken")
const sessionModel=require("./Models/sessionModels")

module.exports={
 verifyToken:async(req,res,next)=>{
    try {
      
       
        let {token,userId}=req.cookies.auth
   
        if(token=="null"|| !token){
            
            return res.send({
                message:"",
                response:"unauthorized Token"
            })  }
            
            const isSession= await sessionModel.getSession(userId,token)
            if(isSession.error || !isSession.response){
               return res.send({
                   response:"Unauthorized User"
               })
            }
   
     token=isSession.response.dataValues.token
   
            verify(token,process.env.SECRET_KEY,(error,data)=>{
             if(error){
               return res.send({
                   response:"Forbidden Access"
               })
             }
   
   
             req.userData=data
             next()
           })
    } catch (error) {
        return res.send({
            error:error
        })
    }
 }

}