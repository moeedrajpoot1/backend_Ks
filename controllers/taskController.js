const taskModels=require('../Models/taskModels')


module.exports={
    createTask:async(req,res)=>{
        try {
            const userbody=req.body
            const user= await taskModels.createTask(userbody)
           
            return res.send({
               response:user.response,
               message:"User task Successfully"
            })
        } catch (error) {
            return res.send({
                error:error
            })
        }
    },
    getAlltask:async(req,res)=>{
        try {
            const task= await taskModels.getAlltask()
            console.log(task)
            if(task.error){
                res.send({
                    message:"Something Went Wrong",
                    error:task.error
                })
            }
            return res.send({
                response:task.response
            })
        } catch (error) {
            return res.send({
                error:error
            })
        }
    },
}