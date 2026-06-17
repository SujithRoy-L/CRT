const mongoose = require("mongoose")

const connectDb = async()=>{
    try{
       await mongoose.connect("")
         console.log("db connected")

    }catch(err){
        console.log(err)
    }
}

module.exports = connectDb;
