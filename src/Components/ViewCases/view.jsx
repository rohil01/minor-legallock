import React, { useEffect } from 'react';
import { useState } from "react"
import CaseFactory from "../../CaseFactory"
import minor from '../../minor';
function View(props) {
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
        } catch (error) {
            console.log(error)
        }
    };
    return (
        <>
        <form onSubmit={handleSubmit}>
          <h1>Signup for LegalLock</h1>

          <div className='input-box'>
            <input
              type='datetime-local'
              placeholder='Date Of Filing'
              name='date'
            
              onChange={handleChange}
            />
          </div>

          <div className='input-box'>
            <input
              type='input'
              placeholder='Client Address'
              name='address'
              
              onChange={handleChange}
            />
          </div>
          <button type='submit'>Submit</button>
        </form>
        </>
);
}
export default View
