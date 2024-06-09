const {models}=require("./index");

module.exports={
    createTask:async(body)=>{
        try {
            const task=await models.tasks.create({...body})
            return{
                response:task
            }
        } catch (error) {
            return {
                error:error
            }
        }
    },
    getAlltask:async()=>{
        try {
            const tasks=await models.tasks.findAll()
            console.log(tasks)
            return{
                response:tasks
            }
        } catch (error) {
            return{
                error:error
            }
        }
    },
}