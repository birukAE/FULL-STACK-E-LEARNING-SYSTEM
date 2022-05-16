import React from 'react'
import styled from "styled-components";
import{useState,useEffect} from 'react'
import Axios from 'axios';
import { useHistory } from 'react-router-dom';
import {Image} from "cloudinary-react";
import { AiFillLike } from 'react-icons/ai';

import { Link } from 'react-router-dom';
import "../../coudnary.css";

const LIKES=styled.button`
 display: flex;
 flex-direction: row; 
 align-items :center ;
 margin-right: 15px;
width: 50px;
border: none;
background: none;

  `;
const LIKE=styled.button`
&:hover {
   color: blue;
   cursor: pointer;
  color:active;
  }
  margin-left :5px ;
 `;
const Inputs=styled.div`
justify-content: space-between;

display: flex;
`;

    const Catagory=styled(Link)`


    color: black;
    `;
  const Cata=styled.div`
  display: flex;
  flex-direction: column;
  background-color: orchid;
  overflow:hidden;
  overflow-y:auto;
  position: fixed;
  height: 565px;
  align-items:center;
  color: black;
  width: 350px;
  `;
  
const Label=styled.div`
font-size: 12px;
font-style: arial;
color: blue;
`;

const Get=styled.div`
color:red;
width:600px;
height:470px;
margin: 15px;
margin-bottom: 10px;

box-shadow:1px black;
border:2px red;
background-color: wheat;
border-radius: 100px;
display: flex;
flex-direction: column; 
align-items: center;
justify-content: center;
`;
const HH=styled.h1`
color:red;
`

 const GET=styled.div`
 align-items: center;
 display: flex;
 
 flex-direction: column;
 
margin-left:500px;

 `;
const Get1=styled.div`

margin-right: 25px;
margin-bottom:10px;
box-shadow:1px black;
border:2px red;
background-color: wheat;
border-radius: 20px;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
`;




  const IC=styled.img`
  width: 100px;
  height: 100px;
  
`;

    const Req=styled.div`
    max-width:90%;
    max-height: 300px;
    justify-content: center;
    align-items: center;
   
    word-wrap: break-word;
    padding:  0 1px;
    
    font-size: 11px;
   color: black;

    `;
const Click=styled.button`
display: flex;
flex-direction: row; 
align-items :center ;
width: 150%;
justify-content: space-evenly;
border: none;
background:none;
margin-top:0px;

 `;


const Ict=styled.div`
display:flex;
flex-direction:column;
align-items: center;
padding: 20px;
`;
const Flex=styled.div`
display:flex;

align-items: center;

`;

const Apply=styled.button`
margin-bottom: 4px;
padding: 4px;
background-color: black;
color:whitesmoke;
&:hover{
  background-color: purple;
  cursor:pointer;
}
`;
const BB=styled.button`
background-color:black;
color:white;
border-radius:2px;
&:hover {

    background-color:blue ;
    cursor: pointer;
   color:active;
   }

padding:2px;

`;

function Unit1mat() {
const[joblist,setJoblist]=useState([])
let history=useHistory();
useEffect(() => {


  Axios.get("http://localhost:3006/posts/reciving").then((response)=>{
 setJoblist(response.data);
       })}, []);
       const likepost=(id)=>{  
        Axios.post(`http://localhost:3006/posts/like/${id}`).then((response)=>{
         
        console.log(response.data);
        })
     };
    return (
    
         <Inputs>
         <Cata>
           <h2>Catagories</h2>
        <Catagory  to ="/theoritical videos">theoritical videos</Catagory>
        <Catagory to ="/practical videos">practical videos</Catagory>
       <Catagory to ="/ all textbook problems"> all textbook problems</Catagory>
       <Catagory  to ="/askual problems">askual problems</Catagory>
       <Catagory to ="/unit 1 tests">askual problems</Catagory>
       <Catagory to ="/resorces for unit 1">resorces for unit 1</Catagory>
       <Catagory to ="/predicted qusitions ">predicted qusitions</Catagory>
       <Catagory to ="/real life examples">real life examples</Catagory>
       <Catagory  to ="/theoritical videos">theoritical videos</Catagory>
        <Catagory to ="/practical videos">practical videos</Catagory>
       <Catagory to ="/ all textbook problems"> all textbook problems</Catagory>
       <Catagory  to ="/askual problems">askual problems</Catagory>
       <Catagory to ="/unit 1 tests">askual problems</Catagory>
       <Catagory to ="/resorces for unit 1">resorces for unit 1</Catagory>
       <Catagory to ="/predicted qusitions ">predicted qusitions</Catagory>
       <Catagory to ="/real life examples">real life examples</Catagory>
       <Catagory  to ="/theoritical videos">theoritical videos</Catagory>
        <Catagory to ="/practical videos">practical videos</Catagory>
       <Catagory to ="/ all textbook problems"> all textbook problems</Catagory>
       <Catagory  to ="/askual problems">askual problems</Catagory>
       <Catagory to ="/unit 1 tests">askual problems</Catagory>
       <Catagory to ="/resorces for unit 1">resorces for unit 1</Catagory>
       <Catagory to ="/predicted qusitions ">predicted qusitions</Catagory>
       <Catagory to ="/real life examples">real life examples</Catagory>
       
      
               </Cata>
    <GET>  <HH>unit 1 theoretical video</HH> 
      
            {joblist.map((val,key)=> { 
              return( 
                        <Get><Ict><Flex>
                        <Req> <h6> {val.grade}</h6> </Req>
        
        <Req><h6>{val.subject}</h6> </Req>
        
        <Req><h6>{val.unit}</h6> </Req>
  
        <Req><h6>{val.teacher}</h6> </Req>
       </Flex>
          <hr />                
        <div className="Image"><Image cloudName="biruk-emiru" publicId={val.file} /></div>
        
        </Ict>
          
<Get1>



            
           
         
          
          
          
          
          <Click><LIKES>{val.likes} <LIKE onClick={()=>{likepost(val.id)}}> < AiFillLike size="20"/></LIKE></LIKES>
          <BB key={key}   onClick={()=>{history.push(`/show/${val.id}`);}}>showmore</BB>
         <Req>posted on<h6>{val.timestamp}</h6> </Req>
          </Click>
       
</Get1>
           
            </Get>
       
           
          ) })} 
 </GET> 
    
           </Inputs>
            
    );
}

export default Unit1mat;
