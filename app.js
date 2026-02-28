const express = require("express")
const { DataDrive } = require("./utils/db")
const userRouters = require("./routes/route")
const app = express()
const port = 3000
require("dotenv").config()


app.use((req,res,next)=>{
   const database = new DataDrive();
   database.connect()
   next()
})

app.use("/",userRouters)



app.listen(port,()=>{
    console.log(`server has been run at http://localhost:${port}`);
})