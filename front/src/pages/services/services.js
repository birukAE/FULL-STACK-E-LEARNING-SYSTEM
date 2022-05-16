import React from 'react';
import { homeObjOne, homeObjTwo,homeObjThree } from './data';
import  {Middel} from '../../home';



function Services() {
  return (
    <>
       
      <Middel {...homeObjOne} />
      <Middel {...homeObjThree} />
      
      
     
    </>
  );
}

export default Services;