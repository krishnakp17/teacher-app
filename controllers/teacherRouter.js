const express=require("express")
const teacherModel=require("../model/teacherModel")
const router=express.Router()

router.post("/add",async(req,res)=>{
    let data=req.body
    let teacher=new teacherModel(data)
    let result=await teacher.save()
    res.json(
        {status:"success"}
    )
})
router.get("/viewall",async(req,res)=>{
    let data=await teacherModel.find()
    res.json(data)
})


module.exports=router