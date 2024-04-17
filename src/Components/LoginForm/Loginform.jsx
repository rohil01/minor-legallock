import React,{Component} from 'react';
import { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import './Loginform.css';
import logo from '../../Assets/metamask.svg'
import { MdAccountCircle } from "react-icons/md";
import web3 from '../../web3';
import minor from '../../minor'
import {Form,Input,Message , Button} from 'semantic-ui-react';
//import { Loader } from 'semantic-ui-react';

class Loginform extends Component{
//   const [manager,setManager]= useState('') //managers address
//   const [loading, setLoading] = useState('Login Through Metamask')
//   const [id, setId] = useState('')
//   const [userAddress,setUserAddress]=useState('')
  
  state={
    manager:'',
    loading:'Login',
    id:'',
    userAddress:''
  }
  static async getInitialProps(){
    const admin = await minor.methods.admin().call();
    
  }
  async componentDidMount() {
    try {
      const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
      const add = accounts[0]; // Assuming user has at least one address
      // console.log(add);
      this.setState({ userAddress: add }); // Use await to ensure state update
      let index= await minor.methods.id(accounts[0]).call();
      this.setState({id:parseInt(index)});
    } catch (error) {
      if (error.code === 4001) {
        alert("Account access denied.");
      } else {
        console.error('Error:', error);
      }
    }
  }
  
  onSubmit = async (event)=>{
    event.preventDefault();
    
    setTimeout(async ()=>{
      // console.log(this.state.userAddress)
      
      // console.log("index:",index)
      if(this.state.id==0){
        //show alert and redirect to register page
        alert("You are not registered. Please sign up first.");
        window.location.href = '/signup'; 
      }
      else{
      //redirect to next page
        
        this.setState({loading:'redirecting to next page'})
        // Redirect to dashboard screen after a 5-second delay
        setTimeout(() => {
          window.location.href = '/dashboard'; 
          console.log("redirecting")
        }, 2000);
      }
      },1000);
    // console.log(index);
    
    
    
    
  };

      
      
  render(){  
      return (
      <div className='wrapper'>
        
          <form onSubmit={this.onSubmit}>
              <h1>{this.props.admin}</h1>
              <h1>Welcome to LegalLock</h1>
              <div className='logo-header'>
                  <img src ={logo} className='login-icon' alt='logo' />
              </div>

              <Button primary loading={this.state.loading}type='submit'>{this.state.loading}
                </Button>

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

export default (Loginform);


