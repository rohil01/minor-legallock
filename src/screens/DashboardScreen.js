import React, { useState, useEffect } from 'react';
import { Button, Card } from 'semantic-ui-react';
import CaseFactory from '../CaseFactory.js';
import Navbar from '../Components/Navbar/Navbar';
import './DashboardScreen.css';
import Case from '../case.js'
import minor from '../minor.js'
const DashboardScreen = () => {
  const [cases, setCases] = useState([]);
  const [details , setDetails]= useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
      const id= await minor.methods.id(accounts[0]).call();
      // console.log(accounts);
      const userDetails = await minor.methods.members(parseInt(id)-1).call();

      const addresses = await CaseFactory.methods.returnAddress1(accounts[0]).call();
      // console.log(addresses);
      setCases(addresses);
    };
    
    fetchData();
  }, []);
  useEffect(() => {
    const fetchDetails = async () => {
      try {
        const promises = cases.map(async (address) => {
          const Cases = Case(address);
          return await Cases.methods.returnDetails().call();
        });
        const resolvedDetails = await Promise.all(promises);
        setDetails(resolvedDetails);
      } catch (error) {
        console.error('Error fetching details:', error);
      }
    };

    fetchDetails();
  }, [cases]);
  
  const renderCases = () => {
    //detail.lawyer 
    //details.client
    //details.dof
    const items=details.map((detail, index) => ({
      header: "Case ID: "+ `${detail.caseid}`,
      description:"f",
      fluid: true,
    }))
    return items
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
