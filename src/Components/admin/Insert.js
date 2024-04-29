import React, { useEffect } from 'react';
import {Input , Button} from 'semantic-ui-react'
import { useState } from "react"
import CaseFactory from "../../CaseFactory"
import minor from '../../minor';
import './insert.css'
function Insert(props) {
    const [loading,setLoading] =useState('')
    const [formData, setFormData] = useState({
        name: '',
        adhaar: '',
        age:'',
        star: '',
        address:''
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
        try {  
            const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
            await minor.methods.insert(formData.name,formData.adhaar,formData.age,formData.star,formData.address).send({
              from: accounts[0]
            });
            alert("User Succefully Added")
            window.location.href = '/admin/new';
        } catch (error) {
            console.log(error)
        }
    };

    return (
        <>
        <form className='viewcases' onSubmit={handleSubmit}>
          <h1>Enter Members Data </h1>

          <div className='viewcases--inputbox1'>
            <h3>Enter Name </h3>
            <Input
              type='input'
              placeholder='Name'
              name='name'
              onChange={handleChange}
              fluid
            />
          </div>
          <h3>Enter Adhaar Card: </h3>
          
          <div className='viewcases--inputbox2'>
            <Input
              type='input'
              placeholder='Client Adhaar'
              name='adhaar'
              onChange={handleChange}
              fluid
            />
          </div>
          <h3>Enter Age: </h3>
          
          <div className='viewcases--inputbox2'>
            <Input
              type='input'
              placeholder='Age'
              name='age'
              onChange={handleChange}
              fluid
            />
          </div>
          <h3>Enter Star: </h3>
          <div className='viewcases--inputbox2'>
            <Input
              type='input'
              placeholder='Star'
              name='star'
              onChange={handleChange}
              fluid
            />
          </div>
          <h3>Enter Address: </h3>
          
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
export default Insert
