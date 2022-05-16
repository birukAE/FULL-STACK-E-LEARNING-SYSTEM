import React from "react";
import styled from "styled-components";
import { FaTimes } from 'react-icons/fa';
import {useState,useEffect,useRef} from "react";
import Axios from 'axios' ;

import { GiCrystalBars } from 'react-icons/gi';
import { FiCheckCircle} from 'react-icons/fi';
import { GiFloatingCrystal } from 'react-icons/gi';
import { IconContext } from 'react-icons/lib';
import {AiOutlineCloseCircle} from 'react-icons/ai';
import "./company.css"
import {
  PricingSection,
  PricingWrapper,
  PricingHeading,
  PricingContainer,
  PricingCard,
  PricingCardInfo,
  PricingCardIcon,
  PricingCardPlan,
  PricingCardCost,
  PricingCardLength,
  PricingCardFeatures,
  PricingCardFeature
} from '../package/package.elements';



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
width:280px;
height:40px;
border:2px solid #aaa;
border-radius:10px;
margin:2px 0;
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
    width: 280px;
    height: 40px;
    margin-bottom:100px;
    margin-top:20px;
    border-radius: 10px;
    border-color: blue;
    background-color:blue;
    color:white;
    :hover{
     cursor: pointer;
     font-weight:bolder;
     background-color: purple;
    }
    :active{
      cursor: pointer;
      font-weight:bolder;
      background-color:blue;
     }
     
     
    `;

const Fileinput=styled.input`
width:25%;
margin-top:5px;
height: 30%;
font-size: medium;
`;
const Select=styled.select`
width:40%;
border:2px solid #aaa;
border-radius:10px;
margin:2px 0;
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
const Label=styled.div`
font-family:'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
font-size:15px;
color: black;
margin-top:5px;
`;
const Label1=styled.div`
font-family:'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
font-size:20px;

margin-top: 25px;
color:black;
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
width:18px;
height: 20px;
display:flex;
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
const PAYER_REGEX = /^[a-zA-Z][a-zA-Z- ]{6,23}$/;
const TRANSACTION_REGEX =/^[a-zA-Z][a-zA-Z0-9-_]{3,23}$/;
const BANK_REGEX = /^[a-zA-Z][a-zA-Z-]{1,23}$/;
const PACK_REGEX =/^[a-zA-Z0-9 ]{1,12}$/;
const DATE_REGEX =/^[a-zA-Z0-9][0-9_-]{1,12}$/;
const GENDER_REGEX =/^[a-zA-Z][a-zA-Z0-9 ]{3,23}$/;
const GRADE_REGEX =/^[a-zA-Z0-9 ]{1,12}$/;
function Memberreg() {
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

  
  

  const[payer,setPayer]=useState("");
  const [validPayer, setValidpayer] = useState(false);
  const [payerFocus, setPayerFocus] = useState(false);

  const[pack,setPack]=useState("");
  const [validPack, setValidpack] = useState(false);
  const [packFocus, setPackFocus] = useState(false);

  const [bank,setBank]=useState("");
  const [validBank, setValidbank] = useState(false);
  const [bankFocus, setBankFocus] = useState(false);

  const[transaction,setTransaction]=useState("");
  const [validTransaction, setValidtransaction] = useState(false);
  const [transactionFocus, setTransactionFocus] = useState(false);

  const[date,setDate]=useState("");
  const [validDate, setValiddate] = useState(false);
  const [dateFocus, setDateFocus] = useState(false);

  const [phone,setPhone]=useState(0);
  const [validPhone, setValidphone] = useState(false);
  const [phoneFocus, setPhoneFocus] = useState(false);

  const [fname,setFname]=useState("");
  const [validfname, setValidfname] = useState(false);
  const [fnameFocus, setFnameFocus] = useState(false);

  const [lname,setLname]=useState("");
  const [validlname, setValidlname] = useState(false);
  const [lnameFocus, setLnameFocus] = useState(false);


  
  
  

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
  setValidpayer(PAYER_REGEX.test(payer));
}, [payer])
useEffect(() => {
setValidtransaction(TRANSACTION_REGEX.test(transaction));
}, [transaction])
useEffect(() => {
  setValidemail(EMAIL_REGEX.test(email));
}, [email])
useEffect(() => {
setValidgender( GENDER_REGEX.test(gender));
}, [gender])
useEffect(() => {
  setValidbank(BANK_REGEX.test(bank));
}, [bank])

useEffect(() => {
  setValidpack(PACK_REGEX.test(pack));
}, [pack])

useEffect(() => {
setValiddate(DATE_REGEX.test(date));
  }, [date])

  useEffect(() => {
setValidgrade(GRADE_REGEX.test(grade));
    }, [grade])
 useEffect(() => {
 setValidregion(REGION_REGEX.test(region));
       }, [region])  
 useEffect(() => {
 setValidgender(GENDER_REGEX.test(gender));
       }, [gender])  
  useEffect(() => {
  setErrMsg('');
  }, [username, password, comfirm,phone,transaction,date,gender,payer,pack,bank,fname,lname,email,grade,region])
 







    const Submit =()=>{
Axios.post("http://localhost:3001/student/stu",{username:username,password:password,email:email,fname:fname,lname:lname,region:region,bank:bank,pack:pack,date:date,payer:payer,transaction:transaction,phone:phone,comfirm:comfirm,grade:grade,gender:gender,})
.then((response)=>{
  console.log(response);
 
if(response.data.Submited){
    setSuccess(true)
  }
else{
setErrMsg(response.data.message)
  }

}


)
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
                  <h1>Registration</h1>
                  <Form> 
  
  
 
  <label htmlFor="username">
  Username:
 < FiCheckCircle className={validName ? "valid" : "hide"}  />
 <AiOutlineCloseCircle  className={validName || !username ? "hide" : "invalid"} />
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
    Email:
    < FiCheckCircle  className={validEmail ? "valid" : "hide"} />
    <AiOutlineCloseCircle className={validEmail|| !email? "hide" : "invalid"} />
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
    Password:
    < FiCheckCircle  className={validpassword ? "valid" : "hide"} />
    <AiOutlineCloseCircle className={validpassword|| !password? "hide" : "invalid"} />
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
     confrim psssword:
< FiCheckCircle className={validComfirm && comfirm ? "valid" : "hide"} />
<AiOutlineCloseCircle className={validComfirm || !comfirm ? "hide" : "invalid"} />
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
    First name:
    < FiCheckCircle  className={validfname? "valid" : "hide"} />
    <FiCheckCircle className={validfname|| !fname? "hide" : "invalid"} />
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
    Last name:
    < FiCheckCircle  className={validlname ? "valid" : "hide"} />
    <AiOutlineCloseCircle className={validlname|| !lname? "hide" : "invalid"} />
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
    Phone number:
    < FiCheckCircle  className={validPhone ? "valid" : "hide"} />
    <AiOutlineCloseCircle className={validPhone|| !phone? "hide" : "invalid"} />
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
     <GiCrystalBars />
     8 to 24 characters.<br />
     Must include uppercase and lowercase letters, a number and a special character.<br />
     Allowed special characters: <span aria-label="exclamation mark">!</span> <span aria-label="at symbol">@</span> <span aria-label="hashtag">#</span> <span aria-label="dollar sign">$</span> <span aria-label="percent">%</span>
</p>   

<label htmlFor="region">
Region:
< FiCheckCircle  className={validregion ? "valid" : "hide"} />
    <AiOutlineCloseCircle className={validregion|| !region? "hide" : "invalid"} />
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
 <GiCrystalBars />
 8 to 24 characters.<br />
 Must include uppercase and lowercase letters, a number and a special character.<br />
 Allowed special characters: <span aria-label="exclamation mark">!</span> <span aria-label="at symbol">@</span> <span aria-label="hashtag">#</span> <span aria-label="dollar sign">$</span> <span aria-label="percent">%</span>
</p> 
<label htmlFor="gender">
Gender:
< FiCheckCircle  className={validgender ? "valid" : "hide"} />
    <AiOutlineCloseCircle className={validgender|| !gender? "hide" : "invalid"} />
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
 <GiCrystalBars />
 8 to 24 characters.<br />
 Must include uppercase and lowercase letters, a number and a special character.<br />
 Allowed special characters: <span aria-label="exclamation mark">!</span> <span aria-label="at symbol">@</span> <span aria-label="hashtag">#</span> <span aria-label="dollar sign">$</span> <span aria-label="percent">%</span>
</p> 
<label htmlFor="grade">
Grade:
< FiCheckCircle  className={validgrade ? "valid" : "hide"} />
    <AiOutlineCloseCircle className={validgrade|| !grade? "hide" : "invalid"} />
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
 
   <Label1>Part 3: PAYMENT METHODES</Label1>
   
   <label htmlFor="pack">
    Select Your package:
   < FiCheckCircle  className={validPack ? "valid" : "hide"} />
    <AiOutlineCloseCircle className={validPack|| !pack? "hide" : "invalid"} />
</label>
  <IconContext.Provider value={{ color: '#a9b3c1', size: 20 }}>
    <PricingSection>
      <PricingWrapper>
        <PricingHeading>Our packages</PricingHeading>
        <PricingContainer>
        <Pricing1>
          <PricingCard >
            <PricingCardInfo>
      <PricingCardIcon>
  
        <INPUT 
        id="pack"
        
        required
        aria-invalid={validPack ? "false" : "true"}
        aria-describedby="packnote"
        onFocus={() => setPackFocus(true)}
        onBlur={() => setPackFocus(false)} 
        type="radio" 
        name="package" value="3 month" onChange={(event)=>{setPack(event.target.value);}}/>

        
              </PricingCardIcon><PricingCardFeatures>
              
              <PricingCardPlan>Starter Pack</PricingCardPlan>
              <PricingCardCost>199.9 birr</PricingCardCost>
              <PricingCardLength>per month</PricingCardLength>
              
                <PricingCardFeature>all supportings</PricingCardFeature>
                <PricingCardFeature>all videos</PricingCardFeature>
                <PricingCardFeature>all docments</PricingCardFeature>
              </PricingCardFeatures>
             
            </PricingCardInfo>
           
        </PricingCard>
          <PricingCard >
            <PricingCardInfo>
              <PricingCardIcon>
              <INPUT 
              id="pack"
              
              required
              aria-invalid={validPack ? "false" : "true"}
              aria-describedby="uidnote"
              onFocus={() => setPackFocus(true)}
              onBlur={() => setPackFocus(false)}  
              type="radio" 
              name="package" value="1 month" onChange={(event)=>{setPack(event.target.value);}}/> 
              
              </PricingCardIcon><PricingCardFeatures>
              <PricingCardPlan>Gold Rush</PricingCardPlan>
              <PricingCardCost>299.99</PricingCardCost>
              <PricingCardLength>per 3 moths </PricingCardLength>
              
                <PricingCardFeature>all videos</PricingCardFeature>
                <PricingCardFeature>all docmentatitons</PricingCardFeature>
                <PricingCardFeature>Live support</PricingCardFeature>
              </PricingCardFeatures>
              
            </PricingCardInfo>
          </PricingCard>  
          </Pricing1>
          <Pricing2>
          <PricingCard >
          
            <PricingCardInfo>
            
            <PricingCardIcon>
            <INPUT

             type="radio" 
            name="package" value="6 months" onChange={(event)=>{setPack(event.target.value);}}/>
           
              </PricingCardIcon><PricingCardFeatures>
              <PricingCardPlan>Diamond Kings</PricingCardPlan>
              <PricingCardCost>699.99</PricingCardCost>
              <PricingCardLength>per 6 months</PricingCardLength>
              
                <PricingCardFeature>all videos</PricingCardFeature>
                <PricingCardFeature>all docmentations</PricingCardFeature>
                <PricingCardFeature> live Support</PricingCardFeature>
              </PricingCardFeatures>
              
            </PricingCardInfo>
            </PricingCard>
           <PricingCard>
             <PricingCardInfo>
              <PricingCardIcon>
              <INPUT 
           
              type="radio" 
              name="package" value="1 year" onChange={(event)=>{setPack(event.target.value);}}/>
              
              </PricingCardIcon> <PricingCardFeatures>
              <PricingCardPlan>Diamond Kings</PricingCardPlan>
              <PricingCardCost>999.9 birr</PricingCardCost>
              <PricingCardLength>per a year</PricingCardLength>
             
                <PricingCardFeature>all videos</PricingCardFeature>
                <PricingCardFeature>all docmentations</PricingCardFeature>
                <PricingCardFeature>24/7 suport</PricingCardFeature>
              </PricingCardFeatures>
             
            </PricingCardInfo>
          </PricingCard>
          </Pricing2>
        </PricingContainer>
      </PricingWrapper>
    </PricingSection>
  </IconContext.Provider>

<label htmlFor="bank">
   Select Your Bank:
   < FiCheckCircle className={validBank ? "valid" : "hide"} />
   <AiOutlineCloseCircle className={validBank || !bank ? "hide" : "invalid"} />
</label> 
  <Banks><Bank>
  

  <INPUT 

id="bank"
onChange={(e) => setBank(e.target.value)}
required
aria-invalid={validBank ? "false" : "true"}
aria-describedby="pwdnote"
onFocus={() => setBankFocus(true)}
onBlur={() => setBankFocus(false)}
  type="radio" 
  name="bank" 
  value="CBE" 
  />
  <BANK><p>CBE</p><p>BIRUK EMIRU</p><p>1000146859405</p></BANK></Bank>

  <Bank>
  <INPUT type="radio" name="bank" value="ABYSINYA" onChange={(event)=>{setBank(event.target.value);}}/>
  <BANK><p>ABYSINYA</p><p>BIRUK EMIRU</p><p>1000146859405</p></BANK></Bank>
  <Bank>
  <INPUT type="radio" name="bank" value="AWASH" onChange={(event)=>{setBank(event.target.value);}}/>
  <BANK><p>AWASH</p><p>BIRUK EMIRU</p><p>1000146859405</p></BANK></Bank>
  
  <Bank> 
      <INPUT type="radio" name="bank" value="ZEMEN" onChange={(event)=>{setBank(event.target.value);}}/>
  <BANK>
  <p>BIRUK EMIRU</p>
  <p>BIRUK EMIRU</p>
  <p>1000146859405</p>
  </BANK>
  </Bank>
 
  <Bank> 
      <INPUT type="radio" name="bank" value="ambessa" onChange={(event)=>{setBank(event.target.value);}}/>
  <BANK><p>AMBESA</p><p>BIRUK EMIRU</p><p>1000146859405</p></BANK></Bank> </Banks>

  <label htmlFor="payer">
  Payer's Fullname:
  < FiCheckCircle  className={validPayer ? "valid" : "hide"} />
    <FaTimes className={validPayer|| !payer? "hide" : "invalid"} />
</label> 
    <Input 
    type="text" 
    id="payer"
    value={payer}
    required
    aria-invalid={validPayer ? "false" : "true"}
    aria-describedby="payernote"
    onFocus={() => setPayerFocus(true)}
    onBlur={() => setPayerFocus(false)} 
    onChange={(event)=>{setPayer(event.target.value);}}/>

    <p id="payernote" className={payerFocus&& payer&& !validPayer ? "instructions" : "offscreen"}>
    <GiCrystalBars />
    8 to 24 characters.<br />
    Must include uppercase and lowercase letters, a number and a special character.<br />
    Allowed special characters: <span aria-label="exclamation mark">!</span> <span aria-label="at symbol">@</span> <span aria-label="hashtag">#</span> <span aria-label="dollar sign">$</span> <span aria-label="percent">%</span>
</p>

    <label htmlFor="transaction">
    Transaction Id:
    < FiCheckCircle  className={validTransaction ? "valid" : "hide"} />
    <FaTimes className={validTransaction|| !transaction? "hide" : "invalid"} />
</label>
    <Input 
    id="transaction"
    value={transaction}
    required
    aria-invalid={validTransaction ? "false" : "true"}
    aria-describedby="transactionnote"
    onFocus={() => setTransactionFocus(true)}
    onBlur={() => setTransactionFocus(false)} 
    type="varchar" 
    onChange={(event)=>{setTransaction(event.target.value);}}/>

    <p id="transactionnote" className={transactionFocus&&transaction && !validTransaction ? "instructions" : "offscreen"}>
    <GiCrystalBars />
    8 to 24 characters.<br />
    Must include uppercase and lowercase letters, a number and a special character.<br />
    Allowed special characters: <span aria-label="exclamation mark">!</span> <span aria-label="at symbol">@</span> <span aria-label="hashtag">#</span> <span aria-label="dollar sign">$</span> <span aria-label="percent">%</span>
</p>

    <label htmlFor="date">
    Date Of Payment
    < FiCheckCircle  className={validDate ? "valid" : "hide"} />
    <AiOutlineCloseCircle className={validDate|| !date? "hide" : "invalid"} />
</label>                         
  <Input 
  id="date"
  value={date}
  required="please fill"
  aria-invalid={validDate ? "false" : "true"}
  aria-describedby="datenote"
  onFocus={() => setDateFocus(true)}
  onBlur={() => setDateFocus(false)}  
  type="date" placeholder="e.g 23/5/2021 E.C"
  onChange={(event)=>{setDate(event.target.value);}}/> 
  
 <Button disabled={!validName||!validpassword||!validfname ||!validlname ||!validregion ||!validgrade ||!validgender ||!validBank || !validPayer|| !validTransaction ||!validDate||!validEmail||!validgrade ? true : false}onClick={Submit}>Register</Button>
    </Form>
  
    </Section>
)
}

</>
)
}
export default Memberreg;
