import React, { Component } from 'react';
import './SignupForm.css'; 
import { Link } from 'react-router-dom';

class SignupForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      adhaar: '',
      age: '',
      star: '',
    };
  }

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const { name, adhaar, age, star } = this.state;

    if (!name.trim()) {
      alert('Name should not be empty');
      return;
    }

    if (!/^\d{12}$/.test(adhaar)) {
      alert('Adhaar should be a 12-digit number');
      return;
    }

    if (parseInt(age, 10) < 18) {
      alert('Age should be 18 or above');
      return;
    }

    if (parseInt(star, 10) < 1 || parseInt(star, 10) > 3) {
      alert('Star value should be between 1 and 3');
      return;
    }

    // json temporary to backend here
    //localStorage.setItem('signupData', JSON.stringify(this.state));
    console.log('Form submitted:', this.state);
    alert("You will be registered within 2 days!");
    //this.props.history.push('/');
  };

  
  handleLoginClick = (e) => {
    e.preventDefault();
      // this.props.history.push('/');
  };

  render() {
    const { name, adhaar, age, star } = this.state;

    return (
      <div className='wrapper'>
        <form onSubmit={this.handleSubmit}>
          <h1>Signup for LegalLock</h1>

          <div className='input-box'>
            <input
              type='text'
              placeholder='Name'
              name='name'
              value={name}
              onChange={this.handleChange}
            />
          </div>

          <div className='input-box'>
            <input
              type='number'
              placeholder='Adhaar'
              name='adhaar'
              value={adhaar}
              onChange={this.handleChange}
            />
          </div>

          <div className='input-box'>
            <input
              type='number'
              placeholder='Age'
              name='age'
              value={age}
              onChange={this.handleChange}
            />
          </div>

          <div className='input-box'>
            <input
              type='number'
              placeholder='Star'
              name='star'
              value={star}
              onChange={this.handleChange}
            />
          </div>

          <button type='submit'>Signup</button>

          <div className='login-link' onClick={this.handleLoginClick}>
            <p>Already have an account? <Link to ="/">Login</Link></p>
          </div>
        </form>
      </div>
    );
  }
}

export default SignupForm;
