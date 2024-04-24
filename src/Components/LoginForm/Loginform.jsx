import React,{Component} from 'react';
import './Loginform.css';
import logo from '../../Assets/metamask.svg'
import { MdAccountCircle } from "react-icons/md";
import minor from '../../minor'
import {Button} from 'semantic-ui-react';

class Loginform extends Component{
  
  state={
    manager:'',
    loading:'Login',
    id:'',
    userAddress:''
  }
  async componentDidMount() {
    try {
      const admin = await minor.methods.admin().call();
      this.setState({manager: admin});
      console.log("Admins Address is: ", admin);
      const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
      const add = accounts[0]; // Assuming user has at least one address  
      this.setState({ userAddress: add }); // Use await to ensure state update
      let index= await minor.methods.id(accounts[0]).call();
      this.setState({id:parseInt(index) - 1});
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
      if(!(this.state.id>=0) || parseInt((await minor.methods.members(this.state.id).call()).id)===0){
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


