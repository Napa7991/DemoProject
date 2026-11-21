import express from "express"
import cors from "cors"

const app = express()
app.use(cors())
app.use(express.json())

app.post("/api/contact",(req,res)=>{
    const{email,phone} =req.body;
    console.log("Recieved:",email,phone)
    res.json({message:"Saved"})
})

app.listen(5000,()=>
{
    console.log("Server is running on http://localhost:5000")
})
