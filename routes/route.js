const express = require('express')
const router = express.Router()
const mongodb = require('../model/model')


router.post('/',async(req,res)=>{
    const data = new mongodb(req.body)
    await data.save()
    
    res.status(201).json("Added successfully")
})


module.exports = router