const Joi = require("joi");

const createUserSchema = Joi.object().keys({
    userId:Joi.string(),
    userName: Joi.string().min(3).max(20).required(),
    role: Joi.string().required(),
    password: Joi.string().min(3).max(20).required(),
})

const updateUserSchema=Joi.object().keys({
    userId:Joi.string().required(),
    userName:Joi.string(),
})
const deleteUserSchema=Joi.object().keys({
    userId:Joi.string().required()
})

module.exports = {
    createMiddleware: async (req, res, next) => {
        try {
            const validate = await createUserSchema.validateAsync(req.body);
            req.validatedBody = validate;
            next();  
        } catch (error) {
            res.status(400).send({
                error: error.details[0].message  
            });
        }
    },
    deleteUserSchema:async(req,res,next)=>{
try {
    const validate = await deleteUserSchema.validateAsync(req.query);
    req.validatedBody = validate;
    next(); 
    
} catch (error) {
    res.status(400).send({
        error: error.details[0].message  
    });
}
    },

    updateUserSchema:async(req,res,next)=>{
        try {
            const validate = await updateUserSchema.validateAsync(req.body);
            req.validatedBody = validate;
            next(); 
            
        } catch (error) {
            res.status(400).send({
                error: error.details[0].message  
            });
        }
            }
};