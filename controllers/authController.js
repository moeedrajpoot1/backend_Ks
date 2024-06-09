require("dotenv").config();
const userModels=require('../Models/userModels')
const {compare}=require("bcryptjs")
const {sign}=require("jsonwebtoken")
const sessionModels=require("../Models/sessionModels")

module.exports={
    login:async(req,res)=>{
        try {
            
       
            const isUser=await userModels.getUser(false,req.body.userName)
           
            if(isUser.error ){
                res.cookie("auth","null")
                return res.send({
                    message:"user not found",
                    error:isUser.error
                })
            }
   
            const isValid= await compare(req.body.password,isUser.response.dataValues.password)
          
            if(!isValid){
              
                return res.send({
                    
                    response:{
                        message:"Invalid Credentials",
                        response:false,
                        session:"null"
                    }
                })
            }

    delete isUser.response.dataValues.password
  
    const token=sign(isUser.response.dataValues,process.env.SECRET_KEY)
    console.log(token,"tokeennnnnnnnnnnnnnnnnnnn")
    if(token.error){
        return res.send({
            message:"Error In token",
            response:token.error
        })
    }
    const {userId}=isUser.response.dataValues
    const isSession=await sessionModels.getSession(userId,false)
    console.log(isSession,"isSessionnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnn")

   if(isSession.error || isSession.response){
     if(isSession.error){
        return{
            response:{
                message:"invalid credentials",
                response:false,
                error:isSession.error
                
            }
        }
     }


   const deleteSession=await  sessionModels.deletesession(userId)

   if(deleteSession.error || !deleteSession.response){
    return {
        response:{
            message:"Invalid credentials",
            response:false,
            session:"null"
        }
    }
   }
   }

   const session = await sessionModels.createSession({userId,token})
   console.log(session,'sessionnnnnnnnnnnnnnnnnnnnnsssssssssssssssssssssssssssssssssssssssssssssss')
   if(session.error){
    return {
        response:{
            message:"Invalid credentials",
            response:false,
            session:"null"
        }
    }

   }


  
    res.cookie("auth",{token,session,userId})
    
       
  delete session.response.dataValues.token
   
    return res.send({
        message:"logged in Successfull",
        response:true,
        response:session.response
    })


        } catch (error) {
            return res.send({
                error:error
            })
        }
    }
}