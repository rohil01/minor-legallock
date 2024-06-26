import React, { useEffect } from 'react';
import {Input , Button} from 'semantic-ui-react'
import { useState } from "react"
import CaseFactory from "../../CaseFactory"
import minor from '../../minor';
import './view.css'
function View(props) {
    const [loading,setLoading] =useState('')
    const [formData, setFormData] = useState({
        date: '',
        address: ''
      });
      const handleChange = (e) => {
        const { name, value } = e.target;
        console.log(value);
        setFormData(prevState => ({
          ...prevState,
          [name]: value
        }));
      };
    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true)
        const dateObject = new Date(formData.date);
        console.log(dateObject);
        const timestamp = dateObject.getTime();
        console.log(timestamp);
        try {  
            const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
            const userAddress = await minor.methods.user(formData.address).call();
            
            await CaseFactory.methods.createCase(userAddress,timestamp).send({
                from:accounts[0]
            })
            window.location.href = '/dashboard';
        } catch (error) {
            console.log(error)
        }
    };

    return (
        <>
        <form className='viewcases' onSubmit={handleSubmit}>
          <h1>Enter Your Case Basic Details: </h1>

          <div className='viewcases--inputbox1'>
            <h3>Enter Date of filing of the case: </h3>
            <Input
              type='datetime-local'
              placeholder='Date Of Filing'
              name='date'
              onChange={handleChange}
              fluid
            />
          </div>
          <h3>Enter Your Client's Adhaar Card: </h3>
          
          <div className='viewcases--inputbox2'>
            <Input
              type='input'
              placeholder='Client Address'
              name='address'
              onChange={handleChange}
              fluid
            />
          </div>
          <button className='custom-button' loading={loading} type='submit'>Submit</button>
        </form>
        </>
);
}
export default View
