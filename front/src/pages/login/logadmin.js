import React from "react";
import styled from "styled-components";
import IMG from "../../assets/company_team.jpg";
import {useState} from "react";
import Axios from 'axios' ;
import {useHistory} from 'react-router-dom'
import { Link } from "react-router-dom";


const Container=styled.div`
align-items: center;
color: black;
background-image: url(${IMG});
display: flex;
flex-direction: column;
width: 100%;
height: 100vh;
justify-content: center;
padding-bottom:50px;
color:red;
font-family:Arial, Helvetica, sans-serif;

`;
const Input=styled.input`
width: 300px;
height: 40px;
padding-left:10px;
border: solid 2px ;
`;
const Button=styled.button`
width: 190px;
height: 30px;
color: white;
margin: 8px;
border-radius:15px;
background-color: blue;

&:hover{
    background-color:purple;
    cursor:pointer;
color:active;
}`;
const Tutton=styled.button`
width: 30%;
height: 20%;
color: red;
margin-bottom: 100px;
`;
const Respo= styled.div`
display: flex;
flex-direction: column;
align-items: center;
width:350px;
height:370px;
background-color: gray ;
justify-content: center;
color:blue;
`;
const Lebel2=styled.div`
color:red;
font-family:Georgia, 'Times New Roman', Times, serif;
font-size:20px;
align-items:center ;
justify-content:center;
`;
const Label=styled.div`
font-size: 20px;
font-style: arial;
color:black;
`;
const Link1=styled(Link)`
color:blue;
&:hover{
    color:blue;
    cursor:pointer;
color:active;
}
`;
function Admin() {

    const[username,setUsername]=useState("");
    const[password,setPassword]=useState("");
    const [errmessage,setErrMessage]=useState("")
let history=useHistory()

const login = ()=>{
Axios.post("http://localhost:3006/student/adminlogin",
 {username:username,
password:password,}).then((response)=>{
if (response.data.LoggedAdmin){
  localStorage.setItem("LoggedAdmin",true)
  localStorage.setItem("username",response.data.username);
  history.push('/');
}else{
setErrMessage(response.data.message)
}
      });
  };



  

  return (
    <>
    <Container><Respo><Lebel2>{errmessage}</Lebel2>
      <Label>Username</Label>
      <Input type="text" onChange={(event)=>{setUsername(event.target.value);}}/>
      <Label>Password</Label>
      <Input type="password" onChange={(event)=>{setPassword(event.target.value);}}  />
      
     <Button  onClick={login}>LOGIN</Button><Link1  to='/memberreg'>don't have account yet? click to register</Link1>
     </Respo>      
</Container> 

 
</>)}
export default Admin;
