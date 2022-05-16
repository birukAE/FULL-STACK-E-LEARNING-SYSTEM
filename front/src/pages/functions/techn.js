import React from "react";
import styled from "styled-components";
import IMG from "../../assets/company_team.jpg";
import { Link } from 'react-router-dom';



const Container=styled.div`
align-items: center;
color: black;
background-image: url(${IMG});
display: flex;
flex-direction: column;
width: 100%;
height: 100vh;
justify-content: center;

`;
const Container2=styled.div`
justify-content: center;
align-items: center;
display: flex;
flex-direction: column;
margin-bottom: 100px;
margin-top: 50px;
display: flex;
flex-direction: column;
width: 500px;
height: 500px;
border-radius:5px ;
background-color:transparent gray `;

const Button=styled.button`
width: 290px;
height: 55px;
color: white;
margin: 8px;
border-radius:15px;
background-color: blue;

&:hover{
    background-color:purple;
    cursor:pointer;
color:active;
}`;
const Label=styled.div`
font-size: 25px;
font-style: arial;
color:black;
`;
const LINK=styled(Link)`

`;
function Tech() {

  return (
    <>
    <Container>
    <Container2>
         
        <LINK to='/memberreg'> <Button >STUDING TECHNIQUES </Button></LINK>
    
      <LINK to='/techreg'><Button>EXAM TECHNIQUES</Button></LINK>
      
      <LINK to='/other'><Button>SPEECHING TEQNIQES</Button></LINK>
      <LINK to='/memberreg'> <Button >GOOGLING TECHNIQUES</Button></LINK>
    
    <LINK to='/techreg'><Button>MANAGEMENT TECHNIQUES</Button></LINK>
    
    <LINK to='/other'><Button>SCHEDULING TECHNIQUES</Button></LINK>
    <LINK to='/memberreg'> <Button >TIMING TECHINIQUES</Button></LINK>
    
    
      </Container2>
</Container>

 
</>)}
export default Tech;
