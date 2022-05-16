 
import React from "react";
import styled from "styled-components";
import IMG from "../../assets/company_team.jpg";
import { Link } from 'react-router-dom';
import {NavDropdown} from 'react-bootstrap';


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
background-color:black; `;

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
function Subject() {

  return (
    <>
    <Container>
    <Container2>
         
    <NavDropdown title="MATHIMATICS"  bsperfix="dropmenu" >
           
           <NavDropdown.Item href ='/unit1mat' >unit one</NavDropdown.Item>      
           <NavDropdown.Item href ='/ccc '>unit two</NavDropdown.Item>      
           <NavDropdown.Item href ="/ff" >unit three</NavDropdown.Item>      
           <NavDropdown.Item href ="/ff" >unit four</NavDropdown.Item>      
           <NavDropdown.Item href="/hh" >unit five</NavDropdown.Item>      
           <NavDropdown.Item href="/hhh" >unit sex</NavDropdown.Item>      
           <NavDropdown.Item href="/hhh" >unit seven</NavDropdown.Item>      
           <NavDropdown.Item href="/yyyy" >unit eight</NavDropdown.Item>      
           <NavDropdown.Item href="/yyy" >unit nine</NavDropdown.Item>      
           <NavDropdown.Item href="/erer" >unit ten</NavDropdown.Item>      
           
           </NavDropdown>

           <NavDropdown title="ENGLISH" >
           
           <NavDropdown.Item Link to="/" >unit one</NavDropdown.Item>      
           <NavDropdown.Item Link to="/" >unit two</NavDropdown.Item>      
           <NavDropdown.Item Link to="/" >unit three</NavDropdown.Item>      
           <NavDropdown.Item Link to="/" >unit four</NavDropdown.Item>      
           <NavDropdown.Item Link to="/" >unit five</NavDropdown.Item>      
           <NavDropdown.Item Link to="/" >unit sex</NavDropdown.Item>      
           <NavDropdown.Item Link to="/" >unit seven</NavDropdown.Item>      
           <NavDropdown.Item Link to="/" >unit eight</NavDropdown.Item>      
           <NavDropdown.Item Link to="/" >unit nine</NavDropdown.Item>      
           <NavDropdown.Item Link to="/" >unit ten</NavDropdown.Item>      
           
           </NavDropdown>
      
        
           <NavDropdown title="PHYSICS" >
           
           <NavDropdown.Item Link to="/" >unit one</NavDropdown.Item>      
           <NavDropdown.Item Link to="/" >unit two</NavDropdown.Item>      
           <NavDropdown.Item Link to="/" >unit three</NavDropdown.Item>      
           <NavDropdown.Item Link to="/" >unit four</NavDropdown.Item>      
           <NavDropdown.Item Link to="/" >unit five</NavDropdown.Item>      
           <NavDropdown.Item Link to="/" >unit sex</NavDropdown.Item>      
           <NavDropdown.Item Link to="/" >unit seven</NavDropdown.Item>      
           <NavDropdown.Item Link to="/" >unit eight</NavDropdown.Item>      
           <NavDropdown.Item Link to="/" >unit nine</NavDropdown.Item>      
           <NavDropdown.Item Link to="/" >unit ten</NavDropdown.Item>      
           
           </NavDropdown>
           
           <NavDropdown title="CHEMISTRY" >
           
           <NavDropdown.Item Link to="/" >unit one</NavDropdown.Item>      
           <NavDropdown.Item Link to="/" >unit two</NavDropdown.Item>      
           <NavDropdown.Item Link to="/" >unit three</NavDropdown.Item>      
           <NavDropdown.Item Link to="/" >unit four</NavDropdown.Item>      
           <NavDropdown.Item Link to="/" >unit five</NavDropdown.Item>      
           <NavDropdown.Item Link to="/" >unit sex</NavDropdown.Item>      
           <NavDropdown.Item Link to="/" >unit seven</NavDropdown.Item>      
           <NavDropdown.Item Link to="/" >unit eight</NavDropdown.Item>      
           <NavDropdown.Item Link to="/" >unit nine</NavDropdown.Item>      
           <NavDropdown.Item Link to="/" >unit ten</NavDropdown.Item>      
           
           </NavDropdown>
           
           <NavDropdown title="BIOLOGY" >
           
           <NavDropdown.Item Link to="/" >unit one</NavDropdown.Item>      
           <NavDropdown.Item Link to="/" >unit two</NavDropdown.Item>      
           <NavDropdown.Item Link to="/" >unit three</NavDropdown.Item>      
           <NavDropdown.Item Link to="/" >unit four</NavDropdown.Item>      
           <NavDropdown.Item Link to="/" >unit five</NavDropdown.Item>      
           <NavDropdown.Item Link to="/" >unit sex</NavDropdown.Item>      
           <NavDropdown.Item Link to="/" >unit seven</NavDropdown.Item>      
           <NavDropdown.Item Link to="/" >unit eight</NavDropdown.Item>      
           <NavDropdown.Item Link to="/" >unit nine</NavDropdown.Item>      
           <NavDropdown.Item Link to="/" >unit ten</NavDropdown.Item>      
           
           </NavDropdown>
    

           <NavDropdown title="HISTRY" >
           
           <NavDropdown.Item Link to="/" >unit one</NavDropdown.Item>      
           <NavDropdown.Item Link to="/" >unit two</NavDropdown.Item>      
           <NavDropdown.Item Link to="/" >unit three</NavDropdown.Item>      
           <NavDropdown.Item Link to="/" >unit four</NavDropdown.Item>      
           <NavDropdown.Item Link to="/" >unit five</NavDropdown.Item>      
           <NavDropdown.Item Link to="/" >unit sex</NavDropdown.Item>      
           <NavDropdown.Item Link to="/" >unit seven</NavDropdown.Item>      
           <NavDropdown.Item Link to="/" >unit eight</NavDropdown.Item>      
           <NavDropdown.Item Link to="/" >unit nine</NavDropdown.Item>      
           <NavDropdown.Item Link to="/" >unit ten</NavDropdown.Item>      
           
           </NavDropdown>

    <NavDropdown title="ICT" >
    
    <NavDropdown.Item Link to="/" >unit one</NavDropdown.Item>      
    <NavDropdown.Item Link to="/" >unit two</NavDropdown.Item>      
    <NavDropdown.Item Link to="/" >unit three</NavDropdown.Item>      
    <NavDropdown.Item Link to="/" >unit four</NavDropdown.Item>      
    <NavDropdown.Item Link to="/" >unit five</NavDropdown.Item>      
    <NavDropdown.Item Link to="/" >unit sex</NavDropdown.Item>      
    <NavDropdown.Item Link to="/" >unit seven</NavDropdown.Item>      
    <NavDropdown.Item Link to="/" >unit eight</NavDropdown.Item>      
    <NavDropdown.Item Link to="/" >unit nine</NavDropdown.Item>      
    <NavDropdown.Item Link to="/" >unit ten</NavDropdown.Item>      
    
    </NavDropdown>

    <NavDropdown title="AMHARIC" >
    
    <NavDropdown.Item Link to="/" >unit one</NavDropdown.Item>      
    <NavDropdown.Item Link to="/" >unit two</NavDropdown.Item>      
    <NavDropdown.Item Link to="/" >unit three</NavDropdown.Item>      
    <NavDropdown.Item Link to="/" >unit four</NavDropdown.Item>      
    <NavDropdown.Item Link to="/" >unit five</NavDropdown.Item>      
    <NavDropdown.Item Link to="/" >unit sex</NavDropdown.Item>      
    <NavDropdown.Item Link to="/" >unit seven</NavDropdown.Item>      
    <NavDropdown.Item Link to="/" >unit eight</NavDropdown.Item>      
    <NavDropdown.Item Link to="/" >unit nine</NavDropdown.Item>      
    <NavDropdown.Item Link to="/" >unit ten</NavDropdown.Item>      
    
    </NavDropdown>
    
    <NavDropdown title="GEEZ" >
    
    <NavDropdown.Item Link to="/" >unit one</NavDropdown.Item>      
    <NavDropdown.Item Link to="/" >unit two</NavDropdown.Item>      
    <NavDropdown.Item Link to="/" >unit three</NavDropdown.Item>      
    <NavDropdown.Item Link to="/" >unit four</NavDropdown.Item>      
    <NavDropdown.Item Link to="/" >unit five</NavDropdown.Item>      
    <NavDropdown.Item Link to="/" >unit sex</NavDropdown.Item>      
    <NavDropdown.Item Link to="/" >unit seven</NavDropdown.Item>      
    <NavDropdown.Item Link to="/" >unit eight</NavDropdown.Item>      
    <NavDropdown.Item Link to="/" >unit nine</NavDropdown.Item>      
    <NavDropdown.Item Link to="/" >unit ten</NavDropdown.Item>      
    
    </NavDropdown>
    
      </Container2>
</Container>

 
</>)}
export default Subject;

 