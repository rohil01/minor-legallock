import React, { useState, useEffect } from 'react';
import { Button, Card } from 'semantic-ui-react';
import CaseFactory from '../CaseFactory.js';
import Navbar from '../Components/Navbar/Navbar';
import './DashboardScreen.css';
import Case from '../case.js'
import minor from '../minor.js'
import '../index.css'
import Insert from '../Components/admin/Insert.js'
class Insertmember extends React.Component {

  render() {
    return (
        <Insert />
    );
  }
}

export default Insertmember;
