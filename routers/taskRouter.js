const express=require("express");
const router=express.Router()
const{createTaskMiddle}=require("../taskMiddle")
const {createTask,getAlltask}=require("../Controllers/taskController")

router.post("/create",createTaskMiddle,createTask)
router.get("/get", getAlltask)


module.exports=router