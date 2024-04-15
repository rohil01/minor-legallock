import React,{Component} from 'react';
import { useState, useEffect } from 'react';
import { Navigate, redirect, useNavigate } from 'react-router-dom';
import './Loginform.css';
import logo from '../../Assets/metamask.svg'
import { MdAccountCircle } from "react-icons/md";
import web3 from '../../web3';
import minor from '../../minor'

class Loginform extends Component{
//   const [manager,setManager]= useState('') //managers address
//   const [loading, setLoading] = useState('Login Through Metamask')
//   const [id, setId] = useState('')
//   const [userAddress,setUserAddress]=useState('')
  
  state={
    manager:'',
    loading:'Log in Through Metamask',
    id:'',
    userAddress:'',
    // navigate: useNavigate()
  }
  onSubmit = async (event)=>{
    event.preventDefault();
    // console.log("he")
    
    // setLoading('Loading...')
    if (typeof window !== 'undefined' && typeof window.ethereum !== 'undefined'){
      //redirect to next page
      let add='';
      window.ethereum.request({ method: 'eth_requestAccounts' })
        .then((accounts) => {
            // Access to accounts granted
            add = accounts[0]; // Assuming user has at least one address
            // console.log("User's address:", add); //users address
            
            // setUserAddress(add);
            
        })
        .catch((error) => {
            // User denied account access
            if (error.code === 4001) {
              alert("Account access denied.");
            } else {
              console.error('Error:', error);
            }
        });
      //condition change krlio if ki 
    
    // console.log(this.userAddress);
    const admin = await minor.methods.admin().call();
    const index= await minor.methods.id(add).call();
    if(index==0){
      //show alert and redirect to register page
      alert("You are not registered. Please sign up first.");
      // this.state.navigate('/signup');
    }
    else{
    //redirect to next page
      // setLoading('redirecting to next page')
      // Redirect to dashboard screen after a 5-second delay
      // setTimeout(() => {
      //   this.state.navigate('/dashboard');
      // }, 5000);
    }
    console.log(index);
    }
    else{
      console.log("Create Metamask Account")
    }
  }

      
      
  render(){  
      return (
      <div className='wrapper'>
        
          <form onSubmit={this.onSubmit}>
              <h1>{this.props.admin}</h1>
              <h1>Welcome to LegalLock</h1>
              <div className='logo-header'>
                  <img src ={logo} className='login-icon' alt='logo' />
              </div>

              <button type='submit'>{this.state.loading}</button>

              <div className='register-link'>
                  <p>Don't have a MetaMask account? 
                  <a href ="https://metamask.io/" target="_blank" rel="noopener noreferrer"> Create!</a>
                      <MdAccountCircle className='icon'/>
                  </p>
              </div>
          </form>
      </div>
    );
  }  
};

export default Loginform;

