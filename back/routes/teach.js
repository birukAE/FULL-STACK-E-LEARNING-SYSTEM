const express = require("express");
const router=express.Router();
const ab= require('../connection/ab');



router.post("/teaching",(req,res)=>{
    const username=req.body.username;
    const password=req.body.password;
    const email=req.body.email;
    const comfirm=req.body.comfirm;  
    const fname=req.body.fname;
    const lname=req.body.lname;
    const phone=req.body.phone;
    const region=req.body.region;  
    const grade=req.body.grade;
    const subject=req.body.subject;
    const avaliblity=req.body.avaliblity;
    const experiance=req.body.experiance;  
    const education=req.body.education; 
    const gender=req.body.gender;

 ab.query("INSERT INTO teachers (username,password,comfirm,email,grade,gender,region,avaliblity,experiance,education,phone,subject,fname,lname,timestamp) VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?,now())",
    [username,password,comfirm,email,grade,gender,region,avaliblity,experiance,education,phone,subject,fname,lname],
        
    (err,results)=>{
     if(err){
         if (err.code=='ER_DUP_ENTRY'||err.errno==1062){    
       res.json({ Submit:false,message:"username tooken"});
     } ;
 }
             
     else  {  res.json({Submit: true,message:"congra"})
     
          
       } 
        
     
 
         }
         );
      
 
 });
         
 module.exports= router;