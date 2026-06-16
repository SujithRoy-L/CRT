const nodemailer = require("nodemailer");

const transporter  = nodemailer.createTransport({
   service: "gmail",
   auth:{
    user:"sujith1257@gmail.com",
    pass:""
   } 
})

let mailoptions = {
    from:"sujith1257@gmail.com",
    to:"sujithroylingam@gmail.com",
    subject:"blah bah..",
    text:"hi from the batch 4"
}

transporter.sendMail(mailoptions,(err,info)=>{
if(err){
    console.log(err)
}else{
    console.log("mail sent")
}
})