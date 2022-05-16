const express = require("express");
const router=express.Router();
const db= require('../connection/db')


router.post("/spost",(req,res)=>{
    const sname=req.body.sname;
    const country=req.body.country;   
    const program=req.body.program; 
    const sfor=req.body.sfor; 
    const requirment=req.body.requirment; 
    const apply=req.body.apply; 
    const deadline=req.body.deadline; 
    const field=req.body.field;
db.query(
        "INSERT INTO scholarship (sname,country,program,sfor,requirment,apply,deadline,field) VALUES (?,?,?,?,?,?,?,?)",
        [sname,country,program,sfor,requirment,apply,deadline,field ],
            
        (err,result)=>
        {
            if(err){
                console.log(err);
            }else{
                res.send("values inserted");
            }
        }
    );

});


router.get("/getscholarship",(req,res)=>{
    
    db.query(
            "SELECT * FROM scholarship ORDER BY id DESC",(err,result)=>
            {    
            
    if(err){
                    console.log(err);
                }
               res.send(result) 
            }
        );
    
    });
    
    router.get("/scholarid/:id",(req,res)=>{
    const id= req.params.id
        db.query(
                "SELECT * FROM scholarship WHERE id=?",id,(err,result)=>
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
            db.query(
                    "UPDATE scholarship SET deadline=? WHERE id=?",[deadline,id],(err,result)=>
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
                
                        db.query(
                                "DELETE FROM scholarship WHERE id=?",id, (err,result)=>{
                             
                        if(err){
                                        console.log(err);
                                    }
                                else{   res.send(result) ;
                                }
                           } );
                        
                        });           
                        router.get("/shows/:id",(req,res)=>{
                            const id= req.params.id
                                db.query(
                                        "SELECT * FROM scholarship WHERE id=?",id,(err,result)=>
                                        {    
                                        
                                if(err){
                                                console.log(err);
                                            }
                                           res.send(result) 
                                        } );
                                   
                                
                                });

                               
router.post("/likes/:id",(req,res)=>{
const id= req.params.id;

db.query(
 "UPDATE scholarship SET likes=likes+1 WHERE id=?",id,(err,result)=>
 {    
   if(err){                                                      
    console.log(err); }                                   
                                                             
         res.send(result)                                                   
      }                                                     
                                                        
     );
                                                
     });
     router.get("/Turky",(req,res)=>{
    
        db.query(
                "SELECT * FROM scholarship WHERE sfor='Turky'",(err,result)=>
                {    
                
        if(err){
                        console.log(err);
                    }
                   res.send(result) 
                }
            );
        
        });  
     module.exports= router;                                                     
                                                                                                                                });                                       
