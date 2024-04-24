import React from 'react';
import { Link, Navigate } from 'react-router-dom';
import Navbar from '../Components/Navbar/Navbar';
import './DashboardScreen.css';
import CaseFactory from '../CaseFactory.js';

import View from '../Components/ViewCases/view.jsx'

class CaseIndex extends Components{
  static async getInitialProps(){
    const cases = await CaseFactory.methods.returnAddress().call();
    return {cases}
  }
  renderCases(){
    const items = this.props.CaseFactory.cases(address=>{
      return{
          header: address,
          description: (
              //<Link route={/campaigns/${address}}>
                  <a>View Campaign</a>
              //</Link>
          ),
          fluid: true
      }
  });
  return <Card.Group items={items} />;
  }
}

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