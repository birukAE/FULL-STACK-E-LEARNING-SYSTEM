import styled from 'styled-components';
import { FaMagento } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { Box} from '../../gstyles';

export const Nav = styled.nav`
  background: #101522;
  height: 80px;
  display: flex;
  flex-direction:row;
  justify-content: center;
  align-items: center;
  font-size: 1.2rem;
  position: sticky;
  top: 0;
  z-index: 999;
`;

export const NavbarContainer = styled(Box)`
  display: flex;
  justify-content: space-between;
  height: 80px;
align-items:center;
  ${Box}
`;

export const NavLogo = styled(Link)`
  color: #fff;
  justify-self: flex-start;
  cursor: pointer;
  text-decoration: none;
  font-size: 1.6rem;
  display: flex;
  align-items: center;
  
`;

export const NavIcon = styled(FaMagento)`
  margin-right: 0.5rem;
  `;

export const MobileIcon = styled.div`
  display: none;

  @media screen and (max-width: 960px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 60%);
    font-size: 1.8rem;
    cursor: pointer;
    color:white;
  }
`;

export const NavMenu = styled.ul`
  display: flex;
  align-items: center;
  list-style: none;
  text-align: center;
  justify-content:center;

  @media screen and (max-width: 960px) {
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 90vh;
    
    position: absolute;
    top: 80px;
    left: ${({ click }) => (click ? 0 : '-100%')};
    opacity: 1;
    transition: all 0.5s ease;
    background: #101522;
  }
`;

export const NavItem = styled.li`
  height: 80px;
  border-bottom: 2px solid transparent;
 
   &:hover {
    border-bottom: 2px solid #4b59f7;
  }

  @media screen and (max-width: 960px) {
    width: 100%;

    &:hover {
      border: none;
    }
  }
`;

export const NavItemBtn = styled.li`
  @media screen and (max-width: 960px) {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 120px;
  }
`;

export const NavLinks = styled(Link)`
  color: #fff;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0rem 1rem;
  height: 100%;
justify-content:center;
  &:focus {
  transform:scale(1.2);
   transition:1 east-out;
   color:#0467FB;
    
     }
  @media screen and (max-width: 960px) {
    text-align: center;
    padding: 2rem;
    width: 100%;
    display: table;

    &:hover {
      color: #4b59f7;
      transition: all 0.3s ease;
    }
  }
`;

export const NavBtnLink = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  padding: 8px 16px;
  height: 100%;
  width: 100%;
  border: none;
  outline: none;
`;
export const Search = styled.div`
 margin-left:160px;
position: absolute;
width:150px;
height:40px;
border-radius: 20px;
background-color: none;
display: flex;
justify-content: space-between;
align-items:center;
padding-left: 300px;
transition: all 0.3s ease;

@media screen and (max-width: 600px) {
position: absolute;
width:10%;
height:50%;
border-radius: 20px; 
margin-top: 10px;
padding-left: 250px;
display: flex;
margin-left:15px;
display:none;}

`;
export const Searchinput= styled.input`
padding-left: 20px;
border: none;
position: absolute;
top: 0;
left: 0;
height: 100%;
width: 100%;
background-color: white;
color:black;
outline: none;
font-size: 25px;
border: 1px solid transparent;
&:focus{
  border-color: rgba(0,0,0,0.3);
}
@media screen and (max-width: 600px) {
  width:300px;
  position: absolute;
  padding-left:10px;
  }

`;
export const Searchicon= styled.button`
padding:5px;
position: relative;
color:white;
border:none;
z-index: 1;
cursor: pointer;
background-color:blue;

&:hover{
  background-color:purple;
}
&:active{
  color:blue;}
border: none;
&:focus{
  border-color: rgba(0,0,0,0.3);
}
@media screen and (max-width: 600px) {
border:none;
position: absolute;
 margin-top:3px;
}
`;
export const Searchresult= styled.div`
margin-top:10px;
margin-left:305px;
margin-right:100px;
width:300px;
height: 300px;
background-color:whitesmoke ;
overflow-y: auto;
position: absolute;
`;
export const Searchitems= styled.p`

width:100%;
height: 50px;
color:black ;
display:flex;
align-items: center;
margin-left: 10px;

`;
