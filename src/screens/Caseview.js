import React, { useState, useEffect } from 'react';
import Navbar from '../Components/Navbar/Navbar';
import { useParams } from 'react-router-dom';
import View from '../Components/ipfs/view.jsx';


const Caseview = () => {
    const { url } = useParams();
    return (
      <div> 
        {/* <Navbar /> */}
        <View url={url}/>
        
      </div>
    );
  };
  
  export default Caseview;
  