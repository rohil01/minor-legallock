import React, { useState, useEffect } from 'react';
import './DashboardScreen.css';
import '../index.css'
import Navbar from '../Components/Navbar/Navbar.jsx'; 
import Insert from '../Components/admin/Insert.js'
class Insertmember extends React.Component {

  render() {
    return (
      <>
        {/* <Navbar /> */}
        <Insert />

      </>
        
    );
  }
}

export default Insertmember;
