
const joi=require("joi")
const loginService=require("../services/userServices")

const Userschema=joi.object().keys({
    name:joi.string().required(),
    email:joi.string().email().required(),
  
})


module.exports={
    login:async(req,res)=>{
        try {
            const validate= await Userschema.validateAsync(req.body)
            const user= await loginService.login(validate)
            return res.send({
                
                data:user.response
            })
        } catch (error) {
            return res.send({
                message:error.message
                
            })
        }
    }
}