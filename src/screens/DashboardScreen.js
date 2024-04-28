import React, { useState, useEffect } from 'react';
import { Button, Card } from 'semantic-ui-react';
import CaseFactory from '../CaseFactory.js';
import Navbar from '../Components/Navbar/Navbar';
import './DashboardScreen.css';
import Case from '../case.js'
import minor from '../minor.js'
import '../index.css'

const FormattedTimestamp = ({ timestamp }) => {
  try {
    const date = new Date(parseInt(timestamp)); 
    return <span>{date.toLocaleString()}</span>;
  } catch (error) {
    console.error('Error formatting timestamp:', error);
    return <span>Error: Invalid timestamp</span>; 
  }
};

class DashboardScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cases: [],
      details: [],
    };
  }

  componentDidMount() {
    const fetchData = async () => {
      const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
      const id = await minor.methods.id(accounts[0]).call();
      const userDetails = await minor.methods.members(parseInt(id) - 1).call();
      if(userDetails.star==0)
      {
        const addresses = await CaseFactory.methods.returnAddress1(accounts[0]).call();
        this.setState({ cases: addresses });
      }
      else if(userDetails.star==2)
      {
        const addresses = await CaseFactory.methods.returnAddress2(accounts[0]).call();
        this.setState({ cases: addresses });
      }
      
    };

    fetchData();
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.cases !== this.state.cases) {
      const fetchDetails = async () => {
        try {
          const promises = this.state.cases.map(async (address) => {
            const Cases = Case(address);
            return await Cases.methods.newdetails().call();
          });
          const resolvedDetails = await Promise.all(promises);

          this.setState({ details: resolvedDetails });
        } catch (error) {
          console.error('Error fetching details:', error);
        }
      };

      fetchDetails();
    }
  }

  renderCases = () => {
    return this.state.details.map((detail, index) => (
      <Card key={index} href={`/dashboard/cases/${this.state.cases[index]}`}>
        <Card.Content>
          <Card.Header>
            {"Case Id: " + `${detail.caseid}`}
          </Card.Header>
          <Card.Description>
            {"Description Of Case " + `${detail.caseid}`}
          </Card.Description>
          <Card.Description>
            {"Lawyer Address: " + `${detail.lawyer}`}
          </Card.Description>
          <Card.Description>
            {"Client Address: " + `${detail.client}`}
          </Card.Description>
          <Card.Description>
            {"Timestamp: "}
            <FormattedTimestamp timestamp={detail.dof} />
          </Card.Description>
        </Card.Content>
      </Card>
    ));
  };

  redirectToNewPage = () => {
    window.location.href = '/dashboard/new';
  };

  render() {
    return (
      <div className="dashboardScreen">
        <Navbar />
        <button primary color='#1A4D2E' onClick={this.redirectToNewPage}>Create New Case</button>
        <Card.Group>{this.renderCases()}</Card.Group>
      </div>
    );
  }
}

export default DashboardScreen;
