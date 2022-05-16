const express = require("express");
const router=express.Router();
const ab= require('../connection/ab');



router.post("/stu",(req,res)=>{
    const username=req.body.username;
    const password=req.body.password;
    const email=req.body.email;
    const comfirm=req.body.comfirm;  
    const lname=req.body.lname;
    const fname=req.body.fname;
    const pack=req.body.email;
    const bank=req.body.bank;  
    const transaction=req.body.transaction;
    const payer=req.body.payer;
    const gender=req.body.gender;
    const grade=req.body.grade;  
    const region=req.body.region;
    const date=req.body.date;  
   const phone=req.body.phone;
ab.query( "INSERT INTO students (username,password,comfirm,email,date,grade,gender,region,payer,transaction,bank,pack,phone,fname,lname,timestamp) VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,now())",
   [username,password,comfirm,email,date,grade,gender,region,payer,transaction,bank,pack,phone,fname,lname],
       
   (err,results)=>{
    if(err){
        if (err.code=='ER_DUP_ENTRY'||err.errno==1062){    
      res.json({ Submited:false,message:"username tooken"});
    } ;
}
            
    else  {  res.json({Submited: true,message:"congra"})
    
         
      } 
       
    

        }
        );
     

});
        



        
module.exports= router;