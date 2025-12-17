const express = require('express')
const app = express()
const cors = require('cors')
const mongodb = require('mongoose')
require('dotenv').config()
const router = require('./routes/route')
mongodb.connect(process.env.MONGODB_URL).then(()=>console.log("DB is connected")).catch((error)=> console.log(error))


app.use(express.json())
app.use(cors())
app.use(express.urlencoded({extended:true}))

app.use('/testing',router)


app.get('/',(req,res)=>{
   res.send('Welcome back Bro...')
})


app.listen(process.env.PORT,()=>{
    console.log("server running successfully....")
})