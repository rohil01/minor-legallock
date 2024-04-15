import React from 'react';
import { Link, Navigate } from 'react-router-dom';
import Navbar from '../Components/Navbar/Navbar';
import './DashboardScreen.css';

const DashboardScreen = () => {
  return (
    <div className="dashboardScreen">
      <Navbar />
      <div className="container">
        <h1>Welcome to Your E-Vault System</h1>
        <div className="optionContainer">
          <Link to="/filelist" className="button">
            View Files
          </Link>
          <Link to="/uploadfile" className="button">
            Upload File
          </Link>
        </div>
      </div>
    </div>
  );
};

export default DashboardScreen;