const mongodb = require('mongoose')

const mongodbfile = new mongodb.Schema({
    name:{
        type:String,
        require:true
    },
    phone:{
        type:String,
        require:true
    }
})

const fileExport = mongodb.model("testingthefile",mongodbfile)

module.exports = fileExport;