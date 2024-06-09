
const {models}=require("./index");


module.exports={
    createSession:async({...body})=>{
        try {
            
            const session= await models.session.create({...body})
            console.log(session,"sessin modellsllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllssssssssssssssssss")
            return{
                response:session
            }
        } catch (error) {
            return {
                error:error
            }
        }
    },

getSession:async(userId,token)=>{
try {
    const getsession= await models.session.findOne({
...(token
    ? {where :{userId:userId, token:token}}
    :{where:{userId:userId}}
)
    })
    return{
        response:getsession
    }
} catch (error) {
    return{
        error:error
    }
}
},
    deletesession:async(userId)=>{
        try {
            const session=await models.session.destroy({where:{userId:userId}})
            return{
                response:session
            }
        } catch (error) {
            return {
                error:error
            }
        }
    }
}