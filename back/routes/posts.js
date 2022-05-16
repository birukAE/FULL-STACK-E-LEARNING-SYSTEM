const express = require("express");
const router=express.Router();
const ab= require('../connection/ab')






router.post("/post",(req,res)=>{
    const notification=req.body.notification; 
    const type=req.body.type; 
    const catagory=req.body.catagory; 
    const teacher=req.body.teacher; 
    const grade=req.body.grade; 
    const subject=req.body.subject; 
    const unit=req.body.unit; 
    const file=req.body.file; 
ab.query(
        "INSERT INTO posts (notification,teacher,grade,subject,unit,type,catagory, file,timestamp) VALUES (?,?,?,?,?,?,?,?,now())",
        [notification,teacher,grade,subject,unit,type,catagory,file ],
            
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

        router.get("/showapp/:id",(req,res)=>{
            const id= req.params.id
                db.query(
                        "SELECT * FROM upload WHERE id=?",id,(err,result)=>
                        {    
                        
                if(err){
                                console.log(err);
                            }
                           res.send(result) 
                        }
                    );
                
                });         
        router.get("/reciving",(req,res)=>{
            
            ab.query(
                    "SELECT * FROM posts",(err,result)=>
                    {    
                    
            if(err){
                            console.log(err);
                        }
                       res.send(result) 
                    }
                );
            
            });
            router.get("/show/:id",(req,res)=>{
            const id= req.params.id
                ab.query(
                        "SELECT * FROM posts WHERE id=?",id,(err,result)=>
                        {    
                        
                if(err){
                                console.log(err);
                            }
                           res.send(result) 
                        }
                    );
                
                });
            
                router.get("/usern/:username",(req,res)=>{
                    const username= req.params.username
                        ab.query(
                                "SELECT * FROM posts WHERE username=?",username,(err,result)=>
                                {    
                                
                        if(err){
                                        console.log(err);
                                    }
                                   res.send(result) 
                                }
                            );
                        
                        }); 
                        
                router.put("/update",(req,res)=>{
            const id= req.body.id;
            const deadline=req.body.deadline;
                    ab.query(
                            "UPDATE posts SET deadline=? WHERE id=?",[deadline,id],(err,result)=>
                            {    
                            
                    if(err){
                                    console.log(err);
                                }
                               res.send(result) 
                            }
                        );
                    
                    });
        
                    router.delete("/delete/:id",(req,res)=>{
                        const id= req.params.id;
                        
                                ab.query(
                                        "DELETE FROM posts WHERE id=?",id, (err,result)=>{
                                     
                                if(err){
                                                console.log(err);
                                            }
                                        else{   res.send(result) 
                                        }
                                        }
                                        );
                                   } );
                                   router.post("/like/:id",(req,res)=>{
                                    const id= req.params.id;
                                    
                                    ab.query(
                                     "UPDATE posts SET likes=likes+1 WHERE id=?",id,(err,result)=>
                                     {    
                                       if(err){                                                      
                                        console.log(err); }                                   
                                                                                                 
                                             res.send(result)                                                   
                                          }                                                     
                                                                                            
                                         );
                                                                                    
                                         });               
        
        module.exports= router;          
