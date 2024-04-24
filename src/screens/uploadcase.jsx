import React from 'react';
import { Link, Navigate } from 'react-router-dom';
import Navbar from '../Components/Navbar/Navbar';
import {Card , Button} from 'semantic-ui-react'
import './DashboardScreen.css';

import View from '../Components/ViewCases/view.jsx'

const DashboardScreen = () => {
  function newpage(){
    window.location.href = '/dashboard/new';
  }
  return (
    <div className="dashboardScreen">
      <Navbar />
      <View />
    </div>
  );
};

export default DashboardScreen;