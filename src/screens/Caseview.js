import React, { useState, useEffect } from 'react';
import Navbar from '../Components/Navbar/Navbar';
import { useParams } from 'react-router-dom';
import View from '../Components/ipfs/view.jsx';
import '../Components/ipfs/view.css'
import '../screens/Caseview.css';
const Caseview = () => {
    const { url } = useParams();
    return (
      <div> 
        <Navbar />
        <div className='main-container'>
        <View url={url}/>
        </div>
      </div>
    );
  };
  
  export default Caseview;
  