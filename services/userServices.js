module.exports={
    login:async(body)=>{
        try {
           
            user= await body
            if(user.error){
                return {
                    message:error.message
                }
            }
            return {
                response:user
            }
        } catch (error) {
            return {
                error:error.message
            }
            
        }
    }
}