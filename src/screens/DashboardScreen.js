import React from 'react';
import { Link, Navigate } from 'react-router-dom';
import Navbar from '../Components/Navbar/Navbar';
import './DashboardScreen.css';

import View from '../Components/ViewCases/view.jsx'

const DashboardScreen = () => {
  return (
    <div className="dashboardScreen">
      <Navbar />
      <div className="container">
        <h1>Welcome to Your E-Vault System</h1>
        <div className="optionContainer">
          {/* <Link to="/filelist" className="button"> */}
            <View />
          {/* </Link>
          <Link to="/uploadfile" className="button"> */}
          {/* </Link> */}
          
        </div>
      </div>
    </div>
  );
};

export default DashboardScreen;