const joi=require("joi")
const loginSchema=joi.object().keys({
    userName:joi.string().required(),
    
    password:joi.string().min(3).max(18).required()

})

module.exports={
    authmid:async(req,res,next)=>{
        try {
            const validate=await loginSchema.validateAsync(req.body)
            req.validatedBody = validate;
            next();  
        } catch (error) {
            res.status(400).send({
                error: error.details[0].message  
            });
        }
    }
}