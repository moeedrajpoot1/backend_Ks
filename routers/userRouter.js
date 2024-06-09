const express=require("express")
const router=express.Router()
const {createUser,getAllUser,deleteUser,updateUser}=require("../Controllers/UserController")
const {createMiddleware,deleteUserSchema,updateUserSchema}=require("../middle")
const {verifyToken}=require("../tokenMiddle")


router.post("/create",createMiddleware,createUser)
router.get("/getAll",verifyToken,getAllUser)
router.delete("/delete",deleteUserSchema,deleteUser)
router.put("/update",updateUserSchema,updateUser)

module.exports=router