const express=require("express")
const cors=require("cors")
const mongoose=require("mongoose")
const teacherRoute=require("./controllers/teacherRouter")

const app=express()

app.use(express.json())
app.use(cors())

mongoose.connect("mongodb+srv://krishna:krishna17@cluster0.yiellsj.mongodb.net/teacherDb?retryWrites=true&w=majority",
{useNewUrlParser:true}
)
app.use("/api/teacher",teacherRoute)
app.listen(3000,()=>{
    console.log("server running")
})