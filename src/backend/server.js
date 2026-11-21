import express from "express"
import cors from "cors"

import mongoose from "mongoose"
import dotenv from "dotenv"
dotenv.config()
console.log("URL: ",process.env.MONGO_URI)

const app = express()
app.use(cors())
app.use(express.json())

// #r Define the shape of your DataTransfer
const contactSchema = new mongoose.Schema({
    email:{type:String,required:true},
    phone:{type:String,required:true},
    createdAt:{type:Date,default:Date.now}
})

// #r Create a model (this becomes the contacts collection)
const Contact = mongoose.model("Contact",contactSchema)


// #r Save data
app.post("/api/contact", async (req,res)=>{
    const{email,phone} =req.body
    if(!email||!phone){
        return res.status(400).json({message:"Email and phone are required"})

    }
    try{
        await Contact.create({email,phone})
        res.json({message:"Saved"})
    }
    catch(err){
        console.log(err)
        res.status(500).json({message:"Server errror"})
    }
   
})
// #r Connect to the database first, then start the server
mongoose.connect(process.env.MONGO_URI).then(()=>{
    console.log("MongoDB connected")
    app.listen(process.env.PORT||5000, ()=>{
        console.log("Server is running on http://localhost:5000")
    })
})
.catch((err)=>console.log("DB connection failed: ", err.message))
