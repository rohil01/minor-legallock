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
        setFormData(prevState => ({
          ...prevState,
          [name]: value
        }));
      };
    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true)
        const dateObject = new Date(formData.date);
        const timestamp = dateObject.getTime();
        try {  
            const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
            let id= await minor.methods.id(accounts[0]).call();

            const userDetails = await minor.methods.members(parseInt(id)-1).call();
            console.log(userDetails.add);
            await CaseFactory.methods.createCase(userDetails.add,timestamp).send({
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
            />
          </div>
          <h3>Enter Your Client's Address: </h3>
          
          <div className='viewcases--inputbox2'>
            <Input
              type='input'
              placeholder='Client Address'
              name='address'
              
              onChange={handleChange}
            />
          </div>
          <Button className='viewcases--button' loading={loading} type='submit'>Submit</Button>
        </form>
        </>
);
}
export default View
