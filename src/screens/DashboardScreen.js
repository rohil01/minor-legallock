import React, { useState, useEffect } from 'react';
import { Button, Card } from 'semantic-ui-react';
import CaseFactory from '../CaseFactory.js';
import Navbar from '../Components/Navbar/Navbar';
import './DashboardScreen.css';
import Case from '../case.js'
import minor from '../minor.js'

class DashboardScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = { //two variables
      cases: [],
      details: [],
    };
  }

  //fetching details via contractss
  componentDidMount() {
    const fetchData = async () => {
      const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
      const id = await minor.methods.id(accounts[0]).call();
      // console.log(accounts);
      const userDetails = await minor.methods.members(parseInt(id) - 1).call();

      const addresses = await CaseFactory.methods.returnAddress1(accounts[0]).call();
      // console.log(addresses);
      this.setState({ cases: addresses });
    };

    fetchData();
  }


  componentDidUpdate(prevProps, prevState) {
    if (prevState.cases !== this.state.cases) { //checks change
      const fetchDetails = async () => {
        try {
          const promises = this.state.cases.map(async (address) => { //promises yahan hai
            const Cases = Case(address);
            return await Cases.methods.returnDetails().call();
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
    //detail.lawyer address
    //detail.client address
    //detail.date timestamp
    //yahan daalna hai description vagera
    return this.state.details.map((detail, index) => (
      <Card key={index} href={`/uploadnew/${detail.caseid}`}>
        <Card.Content header={"Case ID: " + `${detail.caseid}`} description={"Desc Of " + `${detail.caseid}`} />
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
        <Button primary onClick={this.redirectToNewPage}>Create New Case</Button>
        <Card.Group>{this.renderCases()}</Card.Group>
      </div>
    );
  }
}

export default DashboardScreen;
