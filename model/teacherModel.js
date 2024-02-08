const mongoose=require("mongoose")
const teacherSchema=new mongoose.Schema(
    {
        name:String,
        qual:String,
        dept:String,
        yrofexp:String
    }
)
module.exports=mongoose.model("teacher",teacherSchema)