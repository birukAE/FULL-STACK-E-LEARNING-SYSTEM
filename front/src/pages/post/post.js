import React from "react";
import styled from "styled-components";
import { FaTimes } from 'react-icons/fa';
import {useState,useEffect,useRef} from "react";
import Axios from 'axios' ;
import { AiFillThunderbolt } from 'react-icons/ai';
import { GiCrystalBars } from 'react-icons/gi';
import { GiCutDiamond, GiRock } from 'react-icons/gi';
import { GiFloatingCrystal } from 'react-icons/gi';
import { IconContext } from 'react-icons/lib';
import "../registration/company.css"




const  Section=styled.div`
align-items: center;
color: black;
background-color: goldenrod ;
display: flex;
flex-direction: column;
width: 100%;
height: 100%;
justify-content: center;

`;
const Form=styled.div`
display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    flex-grow: 1;
    padding-bottom: 1rem;
    align-items: center;
`;
const Container=styled.div`
align-items: center;
color: black;
background-color: goldenrod ;
display: flex;
flex-direction: column;
width: 100%;
height: 100%;
justify-content: center;

`;
const Input=styled.input`
width: 300px;
height: 50px;
align-items: center;
font-family: Georgia, 'Times New Roman', Times, serif;

`;
const Dropdown=styled.select`
width: 300px;
height: 50px;
align-items: center;
font-family: Georgia, 'Times New Roman', Times, serif;
font-size: 15px;
justify-content: center;
`;
const Forminput=styled.input`
  width: 500px;
  height: 65px;
  padding-left: 40px;
  margin: 7px;
  border-color:brown;
  border-width: 2px;
  border-radius:19px;
  color: blue;
  font-size: small;
  font-family: Georgia, 'Times New Roman', Times, serif;
  `; 
  
  
  const Button=styled.button`
    width: 200px;
    height: 50px;
    margin-bottom:100px;
    margin-top:20px;
    border-radius: 4px;
    border-color:green;
    background-color:gray;
    :hover{
     cursor: pointer;
     font-weight:bolder;
     background-color: green;
    }
    
    `;

const Fileinput=styled.input`
width:25%;
margin-top:5px;
height: 30%;
font-size: medium;
`;

const Select=styled.select`
width: 500px;
  height: 65px;
  padding-left: 40px;
  margin: 7px;
  
  border-color:brown;
  border-width: 2px;
  border-radius:19px;
  color: blue;
  font-size: medium;
`;
const Label=styled.div`
font-family:'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
font-size:15px;
color: black;
margin-top:5px;
`;
const Label1=styled.div`
font-family:'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
font-size:20px;

margin-top: 30px;
color:blue;
`;
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
`;
const BANK= styled.div`
display: flex;
flex-direction: column;
align-items: center;
`;
const Bank= styled.div`
display: flex;
flex-direction:column;
align-items: center;
margin:5px;
padding-top: 1px;
width:160px;
height:150px;
justify-content: center;
background-color: gray;
&:hover {
    transform: scale(1.06);
    transition: all 0.3s ease-out;
    color: #1c2237;
  }
`;
const Banks= styled.div`
display: flex;
padding: 1px;
align-items: center;
`;
const Pricing1= styled.div`
display: flex;
align-items: center;
`;
const Pricing2= styled.div`
display: flex;
align-items: center;
flex-direction: row;
`;
const INPUT=styled.input`
width:20px;
height: 20px;
&:hover{
  cursor:pointer;
}
`;

function Post() {
 
  const errRef = useRef();
  const[type,setType]=useState("");
  


  const[grade,setGrade]=useState("");
  

  const[subject,setSubject]=useState("");
 

  const[unit,setUnit]=useState("");
  
  const[catagory,setCatagory]=useState("");
  
  const[teacher,setTeacher]=useState("");
  
  
  
  const[notification,setNotification]=useState("");
  

  const [file,setFile]=useState([]);
  
  const [errMsg, setErrMsg] = useState('');
  const [success, setSuccess] = useState(false);
  
  





 const Submit =()=>{

const formData=new FormData()
formData.append("file",file[0]);
formData.append("upload_preset","bkbkbkbk");

Axios.post('https://api.cloudinary.com/v1_1/biruk-emiru/image/upload',formData).then((response)=>{
        
 const fileName=response.data.public_id;
        
        
         



Axios.post("http://localhost:3006/posts/post",
{type:type,subject:subject,teacher:teacher,unit:unit,notification:notification,catagory:catagory,grade:grade,file:fileName})
.then((response)=>{
  console.log(response);
 
if(response.data.Submited){
    setSuccess(true)
  }
else{
setErrMsg(response.data.message)
  }

}


)})
.catch((err)=>{
  setErrMsg("connection faileed")
})
};
  


return (
  <>
  
  {success ? (
         <Section>
                  <h1>Successfully posted</h1>
                  
                  </Section>
          ) : (
              <Section>
                  <p ref={errRef} className={errMsg ? "errmsg" : "offscreen"} aria-live="assertive">{errMsg}</p>
                  <h1>post your file</h1>
                  <Form> 
  <Label1>please fill each fileds carfully</Label1>
 
       <label>type:</label>
<Select value={type} onChange={(event)=>{setType(event.target.value)} }> 
      <option value=''>choose type of the file</option>
         <option>video</option>
         <option>docment</option>
         <option>notification</option>
         </Select>
         <label>grade:</label>
<Select value={grade} onChange={(event)=>{setGrade(event.target.value)} }> 
      <option value="">choose grade</option>
    <option>grade 7</option>
    <option>grade 8</option>
    <option>grade 9</option>
    <option>grade 10</option>
    <option>grade 11</option>
    <option>grade 12</option>
    <option>grade university</option>
    
    
    
         </Select>
         <label>Name:</label>
<Select value={subject}placeholder="employee/employer" onChange={(event)=>{setSubject(event.target.value)} }> 
      <option value="">choose one subject</option>
         <option>matimatics</option>
         <option>physics</option>
         <option>biology</option>
         <option>chemistry</option>
         <option>english</option>
         <option>economics</option>
         <option>geography</option>
         <option>histry</option>
         <option>ict</option>
 
         </Select>
         <label>unit:</label>
<Select value={unit} onChange={(event)=>{setUnit(event.target.value)} }> 
<option value="">choose unit</option>
         <option>unit 1</option>
         <option>unit 2</option>
         <option>unit 3</option>
         <option>unit 4</option>
         <option>unit 5</option>
         <option>unit 6</option>
         <option>unit 7</option>
         <option>unit 8</option>
         <option>unit 9</option>
         <option>unit 10</option>
         </Select>
         <label>catagory:</label>
<Select value={catagory} onChange={(event)=>{setCatagory(event.target.value)} }> 
<option value="">choose catagory</option>
         <option>theoritical videos</option>
         <option>practical videos</option>
         <option>textbook problems</option>
         <option>askuala problems</option>
         <option>askual tests</option>
         <option>reallife examples</option>
         <option>summrizing video</option>
        
         
         </Select>
         <label>Teacher:</label>
         <Input type="varchar" onChange={(event)=>{setTeacher(event.target.value);}}  />
         <label>Choose file:</label>
      <Input type="file" onChange={(event)=>{setFile(event.target.files);}}  />
      <label>notification:</label>
      <Input type="varchar" onChange={(event)=>{setNotification(event.target.value);}}  />
      
      <Button onClick={Submit}>submit</Button>
  </Form>
    </Section>
)
}

</>
)
}
export default Post;
