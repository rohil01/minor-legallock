import React from 'react';
import { useState, useEffect } from 'react';
import { Navigate, redirect, useNavigate } from 'react-router-dom';
import './Loginform.css';
import logo from '../../Assets/metamask.svg'
import { MdAccountCircle } from "react-icons/md";
import web3 from '../../web3';
import minor from '../../minor'

const Loginform = () => {
  const [manager,setManager]= useState('') //managers address
  const [loading, setLoading] = useState('Login Through Metamask')
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const Minor = await minor.methods.manager().call();
        setManager(Minor)
        
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    
    fetchData();
  }, []);

  const onSubmit = async (event)=>{
    event.preventDefault();
    setLoading('Loading...')
    if (typeof window !== 'undefined' && typeof window.ethereum !== 'undefined'){
      //redirect to next page
      window.ethereum.request({ method: 'eth_requestAccounts' })
        .then((accounts) => {
            // Access to accounts granted
            const userAddress = accounts[0]; // Assuming user has at least one address
            console.log("User's address:", userAddress); //users address

            //condition change krlio if ki 
            if(manager.toLowerCase() !== userAddress.toLowerCase()){
              //show alert and redirect to register page
              alert("You are not registered. Please sign up first.");
              navigate('/signup');
            }
            else{
            //redirect to next page
              setLoading('redirecting to next page')
              // Redirect to dashboard screen after a 5-second delay
              setTimeout(() => {
                navigate('/dashboard');
              }, 5000);
            }
        })
        .catch((error) => {
            // User denied account access
            if (error.code === 4001) {
              alert("Account access denied.");
            } else {
              console.error('Error:', error);
            }
        });

      
    }
    else{
      console.log("Create Metamask Account")
    }
  }

  
  return (
    <div className='wrapper'>
      
        <form onSubmit={onSubmit}>
            
            <h1>Welcome to LegalLock</h1>
            <div className='logo-header'>
                <img src ={logo} className='login-icon' alt='logo' />
            </div>

            <button type='submit'>{loading}</button>

            <div className='register-link'>
                <p>Don't have a MetaMask account? 
                <a href ="https://metamask.io/" target="_blank" rel="noopener noreferrer"> Create!</a>
                    <MdAccountCircle className='icon'/>
                </p>
            </div>
        </form>
    </div>
  );
};

export default Loginform;

