const express = require('express');
const app = express()
const mongoose = require('mongoose')
const Product = require("./models/products")

app.use(express.json())

mongoose.connect("")
.then(()=>{
    console.log("db connected")
})
.catch((err)=>{
    console.log(err)
})


app.get("/",(req,res)=>{
   res.send("server is working ")
})


//create data

app.post("/add/products",async (req,res)=>{
try{

 const product = await Product.create(req.body);

 res.status(201).json({
    message: "products added",
    product
 })

}catch(err){
res.status(500).json({
    message: err,
    
 })
}
})

app.listen(3002,()=>{
    console.log("server .started")
})