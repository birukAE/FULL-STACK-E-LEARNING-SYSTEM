import React, {useState,useEffect} from 'react';
import {Nav, NavbarContainer,NavLogo,NavIcon,MobileIcon,NavMenu,
NavItem,NavLinks,Navtool,Navkit,Searchresult,Searchitems,Navlog,Search,Searchicon,Searchinput,NavBtnLink,NavItemBtn} from './navbarstyles';
import { FaBars, FaTimes } from 'react-icons/fa';
import {AiOutlineSearch } from 'react-icons/ai';
import {Button } from '../../gstyles';
import {Marginer}  from "../../components/marginer";
import { Select } from './navbarstyles';
import { useHistory } from 'react-router';
import {NavDropdown} from 'react-bootstrap'
import'bootstrap/dist/css/bootstrap.min.css'


const TopContainer =({data})=> {
  
const username=localStorage.getItem('username');
console.warn(username);

const [click, setClick] = useState(false);
const handleClick = () => setClick(!click);
const closeMobileMenu = () => setClick(false);
const [button, setButton] = useState(true);
const [LoggedIn,setLoggedIn]=useState(false);
const[LoggedAdmin,setLoggedAdmin]=useState(false);
const[LoggedMe,setLoggedMe]=useState(false);

const[filtereddata,setFiltereddata]=useState([]);
const[typing,setTyping]=useState("")
const handlefilter =  (event)=>{
  const Searchword=event.target.value;
  setTyping(Searchword)
  const newFilter=data.filter((value)=>{
    return value.name.toLowerCase().
    includes(Searchword.toLowerCase())
 
});
if(Searchword===""){
setFiltereddata([])
}else{
setFiltereddata(newFilter);
}
};
const clearsearch=()=>{
  setFiltereddata([])
  setTyping("")
};
useEffect(()=>{
   setLoggedIn(localStorage.getItem("LoggedIn")); 
},localStorage.getItem("LoggedIn"));

useEffect(()=>{
  setLoggedAdmin(localStorage.getItem("LoggedAdmin"))
},localStorage.getItem("LoggedAdmin"));

  let history=useHistory();
const logout=()=>{
  
 localStorage.clear();
 alert("successfully loged out")
history.push('/programs');
}

useEffect(()=>{
  setLoggedMe(localStorage.getItem("LoggedMe"))
},localStorage.getItem("LoggedMe"));




const showButton = () => {
  if (window.innerWidth <= 960) {
    setButton(false);
  } else {
    setButton(true);
  }
};

useEffect(() => {
  showButton();
}, []);

window.addEventListener('resize', showButton);

  
    return( <>
    <Nav><NavbarContainer><NavLogo to ='/' >ethio tutor
    
    <Marginer direction="horizontal" margin="0.3em" />
    <NavIcon /></NavLogo>
    <MobileIcon onClick={handleClick}>
              {click ? <FaTimes /> : <FaBars />}
            </MobileIcon>
            <Search >
              <Searchicon>
              { filtereddata.length===0? <AiOutlineSearch size={25}/>:<FaTimes size={20} onClick={clearsearch} />}

             </Searchicon>
                <Searchinput placeholder ='Search here' value={typing} onChange={handlefilter}/> 
                
             </Search>
             
            <NavMenu onClick={handleClick} click={click} >
              <NavItem>
                <NavLinks to='/' >
                  Home
                </NavLinks>
              </NavItem>
              
              {LoggedAdmin ?(
                <>
                <NavItem>
                <NavLinks to='/notifications' onClick={closeMobileMenu}>
                notifications
                </NavLinks>
              </NavItem>
              <NavItem>
                <NavLinks to='/adminstu'>
                 students
                </NavLinks>
              </NavItem>
              <NavItem>
                <NavLinks to='/admintech' onClick={closeMobileMenu}>
                teachers
                </NavLinks>
              </NavItem>
              
               <NavItem>
                <NavLinks to='/adminpost' onClick={closeMobileMenu}>
                 post
                </NavLinks>
              </NavItem>
              
              <NavDropdown title={username} >
           
              <NavDropdown.Item onClick={logout} >logout</NavDropdown.Item>      
              
              </NavDropdown>
            
              
              </>
              
              ):(
                   <>
                   

              {LoggedIn ? (
                <>
                <NavItem>
                <NavLinks to='/qustions' >
                 questions 
                </NavLinks>
              </NavItem> 
              <NavItem>
                <NavLinks to='/qustions' >
                schedules
                </NavLinks>
              </NavItem> 

              <NavItem>
                <NavLinks to='/questions' >
                 notifications
                </NavLinks>
              </NavItem> 
             
              <NavItem>
                <NavLinks to='/questions' >
                 answers 
                </NavLinks>
              </NavItem>  {username}
           
           <button onClick={logout} >logout</button>      
           
         
           
                 
              </>

              
              
                
                 ): (
                   <>
          
                    { LoggedMe ?(
                      <>
                    <NavItem>
                <NavLinks to='/courses' >
                 courses 
                </NavLinks>
              </NavItem> 
              <NavItem>
                <NavLinks to='/mote' >
                 motivations
                </NavLinks>
              </NavItem> 
              <NavItem>
                <NavLinks to='/technic' >
                 techniques
                </NavLinks>
              </NavItem> 
              <NavItem>
                <NavLinks to='/comp' >
                 compitations
                </NavLinks>
              </NavItem> 
              <NavDropdown title={username} >
           
           <NavDropdown.Item onClick={logout} >logout</NavDropdown.Item>      
           
           </NavDropdown>
              
                    </>
                    
                    ):(
                         <>

                    <NavItem>
                <NavLinks to='/services'>
                 services
                </NavLinks>
              </NavItem>
              <NavItem>
                <NavLinks to='/stu' onClick={closeMobileMenu}>
                studentes
                </NavLinks>
              </NavItem>
              <NavItem>
                <NavLinks to='/tech'>
                 teachers
                </NavLinks>
              </NavItem>
              
               <NavItem>  
                  <NavLinks to='/logadmin' >
                    adminstrator
                  </NavLinks>
                </NavItem>
                     
                     <NavItemBtn>
                {button ? (
                  <NavBtnLink to='/log in'>
                    <Button primary>SIGN-UP </Button>
                  </NavBtnLink>
                ) : (
                  <NavBtnLink to='/sign-up'onClick={closeMobileMenu}>
                    <Button fontBig primary>
                      SIGN UP
                    </Button>
                  </NavBtnLink>
                )}
              </NavItemBtn>
                     
                      
               
              </>
              )}
              
              </>
              
              )}       
                    
      </>

                 )};
              
             
              </NavMenu>
           

            </NavbarContainer>
    </Nav> { filtereddata.length!=0 && (
    <Searchresult> {filtereddata.slice(0,15).map((value,key)=>{
                  return (<Searchitems><a href={value.version}>
                  
                  <p>{value.name}</p></a></Searchitems>
                ); })}   </Searchresult> )} 
       </>
       ); 
       
    
};
export default TopContainer;


