import React, { useState, useEffect } from 'react';
import { Button, Card } from 'semantic-ui-react';
import CaseFactory from '../CaseFactory.js';
import Navbar from '../Components/Navbar/Navbar';
import './DashboardScreen.css';
import minor from '../minor.js'
const DashboardScreen = () => {
  const [cases, setCases] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
      let id= await minor.methods.id(accounts[0]).call();

      const userDetails = await minor.methods.members(parseInt(id)-1).call();

      const addresses = await CaseFactory.methods.returnAddress(userDetails.add).call();
      console.log(addresses);
      setCases(addresses);
    };

    fetchData();
  }, []);

  const renderCases = () => {
    return cases.map((address) => ({
      header: address,
      description: <a href={`/campaigns/${address}`}>View Case</a>,
      fluid: true,
    }));
  };

  const redirectToNewPage = () => {
    window.location.href = '/dashboard/new';
  };

  return (
    <div className="dashboardScreen">
      <Navbar />
      <Button primary onClick={redirectToNewPage}>Create New Case</Button>
      <Card.Group items={renderCases()} />
    </div>
  );
};

export default DashboardScreen;
