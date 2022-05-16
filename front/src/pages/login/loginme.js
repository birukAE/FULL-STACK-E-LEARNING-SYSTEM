import React from "react";
import styled from "styled-components";
import IMG from "../../assets/login2.jpg";
import {useState} from "react";
import Axios from 'axios' ;
import {useHistory} from 'react-router-dom'
import { Link } from "react-router-dom";


const Container=styled.div`
align-items: center;
color: white;
background-image: url(${IMG});
display: flex;
flex-direction: column;
width: 100%;
height: 100vh;
justify-content: center;
padding-bottom:50px;
color:red;
text-transform: uppercase;
  letter-spacing: 0.4rem;



`;
const Button=styled.button`
width: 250px;
height: 38px;
color: white;
margin: 10px;
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
width:360px;
height:400px;
background-color: rgba(255,255,255,0.15) ;
box-shadow:0 8px 32px 0 rgba(31,38,135,0.37);
backdrop-filter:blur(8.5px);
justify-content: center;
color:white;
@media only screen and (max-width: 320px) {
  width: 80vw;
  height: 90vh;
  hr {
    margin-bottom: 0.3rem;
  }
  h4 {
    font-size: small;
  }
}
@media only screen and (min-width: 360px) {
  width: 80vw;
  height: 90vh;
  h4 {
    font-size: small;
  }
}
@media only screen and (min-width: 411px) {
  width: 80vw;
  height: 90vh;
}

@media only screen and (min-width: 768px) {
  width: 80vw;
  height: 80vh;
}
@media only screen and (min-width: 1024px) {
  width: 70vw;
  height: 50vh;
}
@media only screen and (min-width: 1280px) {
  width: 30vw;
  height: 80vh;
}


`;
const HorizontalRule = styled.hr`
width: 90%;

color: white;
border: white solid 4px;

`;
const Input=styled.input`
 background: rgba(255, 255, 255, 0.15);
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  border-radius: 2rem;
  width: 80%;
  height: 2rem;
  padding: 1.5rem;
  margin:0.5rem;
  border: none;
  outline: none;
  color: #3c354e;
  font-size: 1rem;
  font-weight: bold;
  &:focus {
    display: inline-block;
    box-shadow: 0 0 0 0.2rem #b9abe0;
    backdrop-filter: blur(12rem);
    border-radius: 2rem;
  }
  &::placeholder {
    color: #b9abe099;
    font-weight: 100;
    font-size: 1rem;
  }
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
color:white;
margin-top:5px;
`;
const Link1=styled(Link)`
color:blue;
text-decoration:none;

&:hover{
    color:orange;
    cursor:pointer;
color:active;
}
`;
function Melogin() {

    const[username,setUsername]=useState("");
    const[password,setPassword]=useState("");
    const [errmessage,setErrMessage]=useState("")
let history=useHistory()

const login = ()=>{
Axios.post("http://localhost:3006/student/studentlogin",
 {username:username,
password:password,}).then((response)=>{
if (response.data.LoggedMe){
  localStorage.setItem("LoggedMe",true)
  localStorage.setItem("username",response.data.username);
  history.push('/');
}else{
setErrMessage(response.data.message)
}
      });
  };



  

  return (
    <>
    <Container><Respo><Lebel2>{errmessage}</Lebel2><h2>LOGIN</h2>
  
      <Input type="text"placeholder="Username" onChange={(event)=>{setUsername(event.target.value);}}/>

      <Input type="password" placeholder="Password" onChange={(event)=>{setPassword(event.target.value);}}  />
     
      
     <Button  onClick={login}>LOGIN</Button><Link1> Forget Password ?</Link1> <HorizontalRule /><Link1  to='/memberreg'>  create account</Link1>
     </Respo>       
</Container> 

 
</>)}
export default Melogin;
