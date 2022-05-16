import React from 'react';
import { Link } from 'react-router-dom';
import {Button} from '../../gstyles';
import { FaMagento } from 'react-icons/fa';
import styled from 'styled-components';
import Img from '../../assets/bgf.jpeg';
 const InfoSec = styled.div`
  
 color:white;
  background-image: url(${Img});
display:flex;
flex-direction:column ;
  align-items: center;
  justify-content: center;
width: 100%;
height:100vh;

  @media screen and (max-width: 768px) {
    max-width: 100%;
    flex-basis: 100%;
    display: flex;
    justify-content: center;
    padding-right: 15px;
  }
`;

const Blur = styled.div`

width:100%;
height:100%;
background-color: rgba(50,50,50, 0.80);
@media screen and (max-width: 768px) {
  max-width: 100%;
  height:100%;
  flex-basis: 100%;
  display: flex;
  justify-content: center;
  align-items:center;
  padding-left:55px;
  margin-left:15px;
}

  
}

`;


 

 const TextWrapper = styled.div`
 
 align-items:center;
justify-content: center;
width:100%;
height:100%;
display:flex;
flex-direction:column;


   @media screen and (max-width: 768px) {
   padding-bottom: 65px;
  }
    
  
`;

 

const TopLine = styled.div`
  color: white;
  font-size: 20px;
  line-height: 16px;
  font-weight: 700;
  letter-spacing: 1.4px;
  margin-bottom: 16px
 
`;
 
 const Heading = styled.h1`
  margin-bottom: 24px;
  font-size: 48px;
  line-height: 1.1;
  font-weight: 600;
  color: ${({ lightText }) => (lightText ? 'white' : '#1c2237')};
  
`;

const Subtitle = styled.p`
max-width: 660px;
  margin-bottom: 35px;
  font-size: 18px;
  line-height: 24px;
  color: ${({ lightTextDesc }) => (lightTextDesc ? 'white' : '#1c2237')};
`;
const Logo = styled.h3`
  margin-bottom: 90px;
  font-size: 48px;
  color:blue;
  display:flex;
  flex-direction:column;
  line-height: 1.1;
text-shadow:white;
  align-items:center;
  justify-content:center;
  
 
  
`;

 function FirstPage({
  primary,
  
  topLine,
  lightTopLine,
  lightText,
  lightTextDesc,
  headline,
  description,
  buttonLabel,
  
  
  
  
}) {
  return (
    
      <InfoSec ><Blur>
 
              <TextWrapper><Logo><FaMagento Style="color: blue;"/>
             <h3>Ethio tutur</h3></Logo>
                <TopLine lightTopLine={lightTopLine}>{topLine}</TopLine>
                <Heading lightText={lightText}>{headline}</Heading>
                <Subtitle lightTextDesc={lightTextDesc}>{description}</Subtitle>
                <Link to='/sign-up'>
                  <Button big fontBig primary={primary}>
                    {buttonLabel}
                  </Button>
                </Link>
              </TextWrapper>
           </Blur>
     
            
               
          
          
          
        
        
      </InfoSec>
  
  );
}
export default FirstPage;

 

