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
import "./company.css"
import { FiCheckCircle} from 'react-icons/fi';


const  Section=styled.div`
align-items: center;
color: black;
background-color: whitesmoke;
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
width:40%;
border:2px solid #aaa;
border-radius:10px;
margin:8px 0;
outline:none;
padding:5px;
box-sizing:border-box;
transition:.3s;
}

&&:focus{
border-color:dodgerBlue;
box-shadow:0 0 8px 0 dodgerBlue;
}
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
width:35%;
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
const USER_REGEX=/^[a-zA-Z][a-zA-Z0-9-_]{3,23}$/;
const PWD_REGEX =/^[a-zA-Z0-9-_@!%$#]{6,23}$/;
const PHONE_REGEX=/^[0-9]{10}$/;
const REGION_REGEX=/^[a-zA-Z ]{3,25}$/;
const EMAIL_REGEX =/^[a-zA-Z0-9.! #$%&'*+/=? ^_`{|}~-]+@[a-zA-Z0-9-.]+(?:\. [a-zA-Z0-9-]+)*$/;
const FNAME_REGEX =/^[a-zA-Z][a-zA-Z0-9 ]{3,23}$/;
const LNAME_REGEX =/^[a-zA-Z][a-zA-Z0-9 ]{3,23}$/;
const EDUCATION_REGEX = /^[a-zA-Z][a-zA-Z- ]{3,23}$/;
const EXPERIANCE_REGEX =/^[a-zA-Z][a-zA-Z0-9-_ ]{3,23}$/;
const AVALIBLITY_REGEX = /^[a-zA-Z][a-zA-Z0-9- ]{1,23}$/;
const SUBJECT_REGEX =/^[a-zA-Z0-9 ]{1,12}$/;

const GENDER_REGEX =/^[a-zA-Z][a-zA-Z0-9 ]{3,23}$/;
const GRADE_REGEX =/^[a-zA-Z0-9 ]{1,12}$/;
function Teacherreg() {
  const userRef = useRef();
  const errRef = useRef();

  const[username,setUsername]=useState("");
  const [validName, setValidName] = useState(false);
  const [usernameFocus, setUsernameFocus] = useState(false);



  const[password,setPassword]=useState("");
  const [validpassword, setValidpassword] = useState(false);
  const [passwordFocus, setPasswordFocus] = useState(false);

  const[comfirm,setComfirm]=useState("");
  const [validComfirm, setValidcomfirm] = useState(false);
  const [comfirmFocus, setComfirmFocus] = useState(false);

  const[email,setEmail]=useState("");
  const [validEmail, setValidemail] = useState(false);
  const [emailFocus, setEmailFocus] = useState(false);

  const[region,setRegion]=useState("");
  const [validregion, setValidregion] = useState(false);
  const [regionFocus, setRegionFocus] = useState(false);
  
  const[gender,setGender]=useState("");
  const [validgender, setValidgender] = useState(false);
  const [genderFocus, setGenderFocus] = useState(false);

  
  

  const[education,setEducation]=useState("");
  const [valideducation, setValideducation] = useState(false);
  const [educationFocus, setEducationFocus] = useState(false);

  const[experiance,setExperiance]=useState("");
  const [validexperiance, setValidexperiance] = useState(false);
  const [experianceFocus, setExperianceFocus] = useState(false);


  
  const [phone,setPhone]=useState(0);
  const [validPhone, setValidphone] = useState(false);
  const [phoneFocus, setPhoneFocus] = useState(false);

  const [fname,setFname]=useState("");
  const [validfname, setValidfname] = useState(false);
  const [fnameFocus, setFnameFocus] = useState(false);

  const [lname,setLname]=useState("");
  const [validlname, setValidlname] = useState(false);
  const [lnameFocus, setLnameFocus] = useState(false);


  const [avaliblity,setAvaliblity]=useState("");
  const [validavaliblity, setValidavaliblity] = useState(false);
  const [avaliblityFocus, setAvaliblityFocus] = useState(false);
  
  const [subject,setSubject]=useState("");
  const [validsubject, setValidsubject] = useState(false);
  const [subjectFocus, setSubjectFocus] = useState(false);

  const [grade,setGrade]=useState("");
  const [validgrade, setValidgrade] = useState(false);
  const [gradeFocus, setGradeFocus] = useState(false);

  const [errMsg, setErrMsg] = useState('');
  const [success, setSuccess] = useState(false);
    
    useEffect(() => {
      userRef.current.focus();
  }, [])

  useEffect(() => {
      setValidName(USER_REGEX.test(username));
  }, [username])

  useEffect(() => {
      setValidpassword(PWD_REGEX.test(password));
      setValidcomfirm(password === comfirm);
  }, [password, comfirm])

  useEffect(() => {
    setValidphone(PHONE_REGEX.test(phone));
}, [phone])

useEffect(() => {
  setValidfname(FNAME_REGEX.test(fname));
}, [fname])
useEffect(() => {
  setValidlname(LNAME_REGEX.test(lname));
}, [lname])
useEffect(() => {
  setValidavaliblity(AVALIBLITY_REGEX.test(avaliblity));
}, [avaliblity])
useEffect(() => {
setValidsubject(SUBJECT_REGEX.test(subject));
}, [subject])
useEffect(() => {
  setValidemail(EMAIL_REGEX.test(email));
}, [email])
useEffect(() => {
setValidgender( GENDER_REGEX.test(gender));
}, [gender])

useEffect(() => {
  setValideducation(EDUCATION_REGEX.test(education));
    }, [education])

 useEffect(() => {
  setValidexperiance(EXPERIANCE_REGEX.test(experiance));
    }, [experiance])

  useEffect(() => {
setValidgrade(GRADE_REGEX.test(grade));
    }, [grade])

 useEffect(() => {
 setValidregion(REGION_REGEX.test(region));
       }, [region])  


  useEffect(() => {
  setErrMsg('');
  }, [username, password, comfirm,phone,education,experiance,gender,subject,fname,lname,email,grade,region])
 







   const Submit =()=>{

    Axios.post("http://localhost:3005/teach/teaching",
 {username:username,password:password,email:email,fname:fname,lname:lname,region:region,subject:subject,

education:education,avaliblity:avaliblity,experiance:experiance,phone:phone,comfirm:comfirm,grade:grade,gender:gender})
.then((response)=>{
  console.log(response);
 
if(response.data.Submit){
    setSuccess(true)
  }

else{
setErrMsg(response.data.message)
  }

})
.catch((err)=>{
  setErrMsg("connection failed")
})
};
  


return (
  <>
  
  {success ? (
         <Section>
                  <h1>Success!</h1>
                  <p>
                      <a href="#">Sign In</a>
                  </p>
                  </Section>
          ) : (
              <Section>
                  <p ref={errRef} className={errMsg ? "errmsg" : "offscreen"} aria-live="assertive">{errMsg}</p>
                  <h1>Register</h1>
                  <Form> 
  <Label1>please fill each fileds carfully</Label1>
  
 
  <label htmlFor="username">
  Username:
 <span className={validName ? "valid" : "hide"} > <GiCrystalBars /></span>
  <span className={validName || !username ? "hide" : "invalid"} ><FaTimes /></span>
</label>
    <Input 
    type="text" 
    id="username"
    ref={userRef}
    autoComplete="off"
    onChange={(event)=>setUsername(event.target.value)}
    required
    aria-invalid={validName ? "false" : "true"}
    aria-describedby="uidnote"
    onFocus={() => setUsernameFocus(true)}
    onBlur={() => setUsernameFocus(false)}  
    />
<p id="uidnote" className={usernameFocus && username && !validName ? "instructions" : "offscreen"} >
    <GiCrystalBars />
    4 to 24 characters.<br />
     Must begin with a letter.<br />
      Letters, numbers, underscores, hyphens allowed.
                       </p>    


    <label htmlFor="email">
    email:
    < FiCheckCircle  className={validEmail ? "valid" : "hide"} />
    <FaTimes className={validEmail|| !email? "hide" : "invalid"} />
</label>
    <Input 
    type="email" 
    id="email"
    value={email}
    required="fill it please"
    aria-invalid={validEmail? "false" : "true"}
    aria-describedby="emailnote"
    onFocus={() => setEmailFocus(true)}
    onBlur={() => setEmailFocus(false)} 
    onChange={(event)=>{setEmail(event.target.value);}}  />
    <p id="emailnote" className={emailFocus&& email  && !validEmail ? "instructions" : "offscreen"}>
    <GiCrystalBars  />
    8 to 24 characters.<br />
    Must include uppercase and lowercase letters, a number and a special character.<br />
    Allowed special characters: <span aria-label="exclamation mark">!</span> <span aria-label="at symbol">@</span> <span aria-label="hashtag">.</span> <span aria-label="dollar sign">$</span> <span aria-label="percent">%</span>
</p>
    <label htmlFor="password">
    password:
    < FiCheckCircle className={validpassword ? "valid" : "hide"} />
    <FaTimes className={validpassword || !password ? "hide" : "invalid"} />
</label>
    <Input 
    type="password"
    id="password"

    value={password}
    required
    aria-invalid={validpassword ? "false" : "true"}
    aria-describedby="pwdnote"
    onFocus={() => setPasswordFocus(true)}
    onBlur={() => setPasswordFocus(false)} 
     onChange={(event)=>{setPassword(event.target.value);}}  />
     <p id="pwdnote" className={passwordFocus && password && !validpassword ? "instructions" : "offscreen"}>
     <GiCrystalBars />
     8 to 24 characters.<br />
     Must include uppercase and lowercase letters, a number and a special character.<br />
     Allowed special characters: <span aria-label="exclamation mark">!</span> <span aria-label="at symbol">@</span> <span aria-label="hashtag">#</span> <span aria-label="dollar sign">$</span> <span aria-label="percent">%</span>
 </p>
     <label htmlFor="comfirm">
     comfrimation:
< FiCheckCircle className={validComfirm && comfirm ? "valid" : "hide"} />
<FaTimes className={validComfirm || !comfirm ? "hide" : "invalid"} />
 </label>  
    <Input 
    type="comfirm" 
    id="comfirm"
    value={comfirm}
    required
    aria-invalid={validComfirm ? "false" : "true"}
    aria-describedby="comnote"
    onFocus={() => setComfirmFocus(true)}
    onBlur={() => setComfirmFocus(false)}  
    onChange={(event)=>{setComfirm(event.target.value);}}  />
    <p id="comnote" className={comfirmFocus && !validComfirm ? "instructions" : "offscreen"}>
    <GiCrystalBars />
    8 to 24 characters.<br />
    Must include uppercase and lowercase letters, a number and a special character.<br />
    Allowed special characters: <span aria-label="exclamation mark">!</span> <span aria-label="at symbol">@</span> <span aria-label="hashtag">#</span> <span aria-label="dollar sign">$</span> <span aria-label="percent">%</span>
</p>  
    <Label1>YOUR PERSONAL DOCMENTS</Label1>
    <label htmlFor="fname">
    fname:
    <FiCheckCircle className={validfname ? "valid" : "hide"} />
    <FaTimes className={validfname || !fname ? "hide" : "invalid"} />
</label> 
    <Input 
    id="fname"
    value={fname}
    required
    aria-invalid={validfname ? "false" : "true"}
    aria-describedby="fnote"
    onFocus={() => setFnameFocus(true)}
    onBlur={() => setFnameFocus(false)} 
    type="varchar"
     onChange={(event)=>{setFname(event.target.value);}}/>
     <p id="fnote" className={fnameFocus &&fname&& !validfname ? "instructions" : "offscreen"}>
     <GiCrystalBars />
     8 to 24 characters.<br />
     Must include uppercase and lowercase letters, a number and a special character.<br />
     Allowed special characters: <span aria-label="exclamation mark">!</span> <span aria-label="at symbol">@</span> <span aria-label="hashtag">#</span> <span aria-label="dollar sign">$</span> <span aria-label="percent">%</span>
 </p>   
 <label htmlFor="lname">
    lname:
    <FiCheckCircle className={validlname ? "valid" : "hide"} />
    <FaTimes className={validlname || !lname ? "hide" : "invalid"} />
</label> 
 <Input 
    id="lname"
    value={lname}
    required
    aria-invalid={validlname ? "false" : "true"}
    aria-describedby="lnote"
    onFocus={() => setLnameFocus(true)}
    onBlur={() => setLnameFocus(false)} 
    type="varchar"
     onChange={(event)=>{setLname(event.target.value);}}/>
     <p id="lnote" className={lnameFocus &&lname&& !validlname ? "instructions" : "offscreen"}>
     <GiCrystalBars />
     8 to 24 characters.<br />
     Must include uppercase and lowercase letters, a number and a special character.<br />
     Allowed special characters: <span aria-label="exclamation mark">!</span> <span aria-label="at symbol">@</span> <span aria-label="hashtag">#</span> <span aria-label="dollar sign">$</span> <span aria-label="percent">%</span>
 </p>   
    
    
    <label htmlFor="phone">
    phone:
    <FiCheckCircle className={validPhone ? "valid" : "hide"} />
    <FaTimes className={validPhone || !phone ? "hide" : "invalid"} />
    </label>

    <Input 
    type="tel" 
    
    id="phone"
    
    autoComplete="off"
    value={phone}
    required
    aria-invalid={validPhone ? "false" : "true"}
    aria-describedby="phonenote"
    onFocus={() => setPhoneFocus(true)}
    onBlur={() => setPhoneFocus(false)}
     onChange={(event)=>{setPhone(event.target.value);}}/>
<p id="phonenote" className={phoneFocus&&phone && !validPhone ? "instructions" : "offscreen"}>
     <FiCheckCircle />
     8 to 24 characters.<br />
     Must include uppercase and lowercase letters, a number and a special character.<br />
     Allowed special characters: <span aria-label="exclamation mark">!</span> <span aria-label="at symbol">@</span> <span aria-label="hashtag">#</span> <span aria-label="dollar sign">$</span> <span aria-label="percent">%</span>
</p>   

<label htmlFor="region">
region:
<FiCheckCircle className={validregion ? "valid" : "hide"} />
<FaTimes className={validregion || !region ? "hide" : "invalid"} />
</label>
<Select
 value={region}
 id="region"

 required
 aria-invalid={validregion ? "false" : "true"}
 aria-describedby="cvstanote"
 onFocus={() => setRegionFocus(true)}
 onBlur={() => setRegionFocus(false)} 
placeholder="e,g per company scale"
onChange={e=>setRegion(e.target.value) }> 
   
   <option value="">select region</option>
       <option>adiss abebe</option>
       <option>afar</option>
       <option>ormia</option>
       <option>somalia</option>
       <option>drie</option>
       <option>amhara</option>
       <option>somalia</option>
       <option>souther nations</option>
       <option>benshangul gumuze</option>
       <option>gambela</option>
       <option>sedama</option>
       <option>hareri</option>
       
       </Select>

   
   <p id="cvstanote" className={regionFocus &&region&& !validregion ? "instructions" : "offscreen"}>
 <FiCheckCircle />
 8 to 24 characters.<br />
 Must include uppercase and lowercase letters, a number and a special character.<br />
 Allowed special characters: <span aria-label="exclamation mark">!</span> <span aria-label="at symbol">@</span> <span aria-label="hashtag">#</span> <span aria-label="dollar sign">$</span> <span aria-label="percent">%</span>
</p> 
<label htmlFor="gender">
gender:
<FiCheckCircle className={validgender ? "valid" : "hide"} />
<FaTimes className={validgender || !gender ? "hide" : "invalid"} />
</label>
<Select
 value={gender}
 id="gender"

 required
 aria-invalid={validgender ? "false" : "true"}
 aria-describedby="cvstanote"
 onFocus={() => setGenderFocus(true)}
 onBlur={() => setGenderFocus(false)} 
placeholder="e,g per company scale"
onChange={e=>setGender(e.target.value) }> 
   <option value="">choose your gender</option>
   <option>male</option>
   <option>female</option>
   <option >other</option>
  
   
   </Select>
   <p id="cvstanote" className={genderFocus&&gender && !validgender ? "instructions" : "offscreen"}>
 <FiCheckCircle />
 8 to 24 characters.<br />
 Must include uppercase and lowercase letters, a number and a special character.<br />
 Allowed special characters: <span aria-label="exclamation mark">!</span> <span aria-label="at symbol">@</span> <span aria-label="hashtag">#</span> <span aria-label="dollar sign">$</span> <span aria-label="percent">%</span>
</p> 
<label htmlFor="grade">
grade:
<FiCheckCircle className={validgrade ? "valid" : "hide"} />
<FaTimes className={validgrade || !grade ? "hide" : "invalid"} />
</label>
    <Select
     
     id="grade"
     value={grade}
     required
     aria-invalid={validgrade ? "false" : "true"}
     aria-describedby="catagorynote"
     onFocus={() => setGradeFocus(true)}
     onBlur={() => setGradeFocus(false)} 
    placeholder="e,g per company scale"
    onChange={e=>setGrade(e.target.value) }> 
    <option>choose your grade</option>
    <option>grade 7</option>
   <option>grade 8</option>
   <option >grade 9</option>
   <option>grade 10</option>
   <option>grade 11</option>
   <option>grade 12</option>
   <option>university</option>
   
   </Select>
       <p id="catagorynote" className={gradeFocus && grade && !validgrade ? "instructions" : "offscreen"}>
     <GiCrystalBars />
     8 to 24 characters.<br />
     Must include uppercase and lowercase letters, a number and a special character.<br />
     Allowed special characters: <span aria-label="exclamation mark">!</span> <span aria-label="at symbol">@</span> <span aria-label="hashtag">#</span> <span aria-label="dollar sign">$</span> <span aria-label="percent">%</span>
 </p> 

 <label htmlFor="subject">
subject:
<FiCheckCircle className={validsubject ? "valid" : "hide"} />
<FaTimes className={validsubject || !subject ? "hide" : "invalid"} />
</label> 
 <Select
     
     id="subject"
     value={subject}
     required
     aria-invalid={validsubject ? "false" : "true"}
     aria-describedby="subnote"
     onFocus={() => setSubjectFocus(true)}
     onBlur={() => setSubjectFocus(false)} 
    placeholder="e,g per company scale"
    onChange={e=>setSubject(e.target.value) }> 
    <option value="">choose your subject</option>
    <option>mathimatics</option>
   <option>chemistry</option>
   <option >biology</option>
   <option>english</option>
   <option>physics</option>
   <option>economics</option>
   <option>ict</option>
   </Select>
   <p id="avanote" className={subjectFocus&&subject && !validsubject? "instructions" : "offscreen"}>
     <GiCrystalBars />
     8 to 24 characters.<br />
     Must include uppercase and lowercase letters, a number and a special character.<br />
     Allowed special characters: <span aria-label="exclamation mark">!</span> <span aria-label="at symbol">@</span> <span aria-label="hashtag">#</span> <span aria-label="dollar sign">$</span> <span aria-label="percent">%</span>
</p>   

 <label htmlFor="education">
education:
<FiCheckCircle className={valideducation ? "valid" : "hide"} />
<FaTimes className={valideducation || !education ? "hide" : "invalid"} />
</label>
    <Select
     
     id="education"
     value={education}
     required
     aria-invalid={valideducation ? "false" : "true"}
     aria-describedby="edunote"
     onFocus={() => setEducationFocus(true)}
     onBlur={() => setEducationFocus(false)} 
    placeholder="e,g per company scale"
    onChange={e=>setEducation(e.target.value) }> 
    <option value="">education</option>
    <option>bachelors degree</option>
   <option>masters degree</option>
   <option >phd</option>
   <option>proffosor</option>
  
   <p id="edunote" className={educationFocus&&education && !valideducation ? "instructions" : "offscreen"}>
     <GiCrystalBars />
     8 to 24 characters.<br />
     Must include uppercase and lowercase letters, a number and a special character.<br />
     Allowed special characters: <span aria-label="exclamation mark">!</span> <span aria-label="at symbol">@</span> <span aria-label="hashtag">#</span> <span aria-label="dollar sign">$</span> <span aria-label="percent">%</span>
</p>   
   </Select>


   <label htmlFor="experiance">
experiance:
<GiCrystalBars className={validexperiance ? "valid" : "hide"} />
<FaTimes className={validexperiance || !experiance ? "hide" : "invalid"} />
</label>

    <Select
     
     id="experiance"
     value={experiance}
     required
     aria-invalid={validexperiance ? "false" : "true"}
     aria-describedby="expynote"
     onFocus={() => setExperianceFocus(true)}
     onBlur={() => setExperianceFocus(false)} 
    placeholder="e,g per company scale"
    onChange={e=>setExperiance(e.target.value) }> 
    <option>Experiance on teaching</option>
    <option>fresh</option>
   <option>junior</option>
   <option >senior</option>
   <option>more than 7 years</option>
   
   </Select>
   <p id="avanote" className={experianceFocus&&experiance && !validexperiance ? "instructions" : "offscreen"}>
     <GiCrystalBars />
     8 to 24 characters.<br />
     Must include uppercase and lowercase letters, a number and a special character.<br />
     Allowed special characters: <span aria-label="exclamation mark">!</span> <span aria-label="at symbol">@</span> <span aria-label="hashtag">#</span> <span aria-label="dollar sign">$</span> <span aria-label="percent">%</span>
</p>   
<label htmlFor="avaliblity">
avaliblity:
<GiCrystalBars className={validavaliblity ? "valid" : "hide"} />
<FaTimes className={validavaliblity || !avaliblity ? "hide" : "invalid"} />
</label>
    <Select
     
     id="avaliblity"
     value={avaliblity}
     required
     aria-invalid={validavaliblity ? "false" : "true"}
     aria-describedby="avanote"
     onFocus={() => setAvaliblityFocus(true)}
     onBlur={() => setAvaliblityFocus(false)} 
    placeholder="e,g per company scale"
    onChange={e=>setAvaliblity(e.target.value) }> 
    <option value="">Avaliblity</option>
    <option>imedatly</option>
   <option>after a week</option>
   <option >after a month</option>
   <option> after a 6 months</option>
   <option>after a year</option>
   </Select>
   <p id="avanote" className={avaliblityFocus&&avaliblity && !validavaliblity ? "instructions" : "offscreen"}>
     <FiCheckCircle />
     8 to 24 characters.<br />
     Must include uppercase and lowercase letters, a number and a special character.<br />
     Allowed special characters: <span aria-label="exclamation mark">!</span> <span aria-label="at symbol">@</span> <span aria-label="hashtag">#</span> <span aria-label="dollar sign">$</span> <span aria-label="percent">%</span>
</p>   
   
    <Button disabled={!validName||!validpassword||!validfname ||!validlname ||!validregion ||!validgrade ||!validgender ||!validexperiance || !valideducation||!validPhone ||!validsubject ||!validavaliblity||!validEmail? true : false}onClick={Submit}>submit</Button>
    </Form>
  
    </Section>
)
}

</>
)
}
export default Teacherreg;
