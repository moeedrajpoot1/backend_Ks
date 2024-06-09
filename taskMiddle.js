const joi=require("joi")
const createTaskSchema=joi.object().keys({
    taskName:joi.string().min(3).max(20).required(),
    description:joi.string(),
    userId:joi.string().max(255).required()

})
module.exports={
    createTaskMiddle:async(req,res,next)=>{
        try {
            const validate=await createTaskSchema.validateAsync(req.body)
            req.validatedBody = validate;
            next();  
        } catch (error) {
            res.status(400).send({
                error: error.details[0].message  
            });
        }
    }
}