const express = require('express');
const app = express()
const mongoose = require('mongoose')
const Product = require("./models/Product")
const multer = require("multer")

//middleware
app.use(express.json())
app.use("/uploads",express.static("uploads"))

mongoose.connect("mongodb+srv://sujithroylingam_db_user:Sujith2005@sujithroy.ah5wipf.mongodb.net/?appName=SujithRoy0")
.then(()=>{
    console.log("db connected")
})
.catch((err)=>{
    console.log(err)
})

const storage = multer.diskStorage({
    destination:(req,file,cb)=>{
       cb(null,"uploads/");
    },
    filename:(req,file,cb)=>{
        cb(null, Date.now() + "-"+ file.originalname)
    }
})

const upload = multer({
    storage
})


app.get("/",(req,res)=>{
   res.send("server is working ")
})


//create data

app.post("/add/products",upload.single("image"),async (req,res)=>{
try{

 const product = await Product.create({
    name:req.body.name,
    price:req.body.price,
    description:req.body.description,
    image:req.file.path
 });

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

//get all the data
app.get("/get/products",async (req,res)=>{
    
    try{

        const product = await Product.find()
        res.status(201).json({
    message: "details of products ",
    product
 })

    }catch(err){
res.status(500).json({
    message: err,
    
 })
}
})


//get by id
app.get("/get/products/:id",async (req,res)=>{
    
    try{

        const product = await Product.findById(req.params.id)

        res.status(201).json({
    message: "details of products ",
    product
 })

    }catch(err){
res.status(500).json({
    message: err,
    
 })
}
})



//update th data
app.put("/update/products/:id",async (req,res)=>{
    
    try{

        const product = await Product.findByIdAndUpdate(
            req.params.id,
            req.body,
            {
              new: true,
            runValidators: true,
            }
        )

        res.status(201).json({
    message: "details of products ",
    product
 })

    }catch(err){
res.status(500).json({
    message: err,
    
 })
}
})

app.delete("/del/products/:id",async (req,res)=>{
    
    try{

        const product = await Product.findByIdAndDelete(req.params.id)
        res.status(201).json({
    message: " deleted ",
   
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