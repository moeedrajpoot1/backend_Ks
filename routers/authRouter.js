const express=require("express");
const router=express.Router()
const {login}=require("../Controllers/authController")
const {authmid}=require("../authmiddle")
router.post("/login",authmid,login)



module.exports=router