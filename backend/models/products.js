const mongoose = require("mongoose")

const Productschema = new mongoose.Schema({
    id:{
        type:Number,
    },
    title:{
        type:String,
    },

    name:{
        type:String,
    },
    price:{
        type:Number
    },
    description:{
        type:String,
    },
    category:{

    },
    image:{
        type:String
    }

    
})

module.exports = mongoose.model("Product",Productschema)