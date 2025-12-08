const express = require('express')
const app = express()
const cors = require('cors')
const mongodb = require('mongoose')
require('dotenv').config()



app.use(express.json())
app.use(cors())
app.use(express.urlencoded({extended:true}))


app.get('/',(req,res)=>{
   res.send('Welcome back Bro...')
})


app.listen(process.env.PORT,()=>{
    console.log("server running successfully....")
})