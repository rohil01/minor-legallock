import React, { useEffect, useState } from 'react';
import '../ipfs/view.css';
import minor from '../../minor';
import { useParams } from 'react-router-dom';
import Upload from './upload';
import Delete from './delete';
import CaseContract from '../../case'


function View(props) {
  const [pin, setPin] = useState([]);
  const { id } = useParams();
  const [star, setStar] = useState(0);
  const [pinsFetched, setPinsFetched] = useState(false); // State to track if pins have been fetched
  const [loading, setLoading] = useState(true); // State to track loading state

  const PINATA_JWT = `Bearer ${process.env.REACT_APP_JWT}`;
  const PIN_QUERY = `https://api.pinata.cloud/data/pinList?status=pinned&pageLimit=1000&includeCount=false`;
  const fetch = require("node-fetch");
  useEffect(()=>{
    let star;
     const fetchStar = async () =>{
       try{
        const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
         const add = accounts[0]; // Assuming user has at least one address   
         //console.log(add);     
        let id= await minor.methods.id(accounts[0]).call(); 
        id = parseInt(id);        
        const userStarValue = await minor.methods.members(id-1).call();
         setStar(parseInt(userStarValue.star));
         console.log(userStarValue);
      }catch (error) {
        console.error('Error fetching   user star value:', error);
    }      
   };
  fetchStar();
 },[id]);    
  
  const fetchPins = async () => {
    console.log("code running");
    try {
      let pinHashes = [];
      const Case = CaseContract(props.url);
      pinHashes= await Case.methods.fetchAddr().call();    

      console.log('Total pins fetched: ', pinHashes.length);
      setPin(pinHashes);
      setPinsFetched(true); // Set pinsFetched to true after fetching pins
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    console.log("render")
    if (!pinsFetched) { // Check if pins have not been fetched yet
      fetchPins();
    }
  }, [pinsFetched]); // Run only when pinsFetched changes

  useEffect(() => {
    console.log(pin)
    if (pin.length >= 0) {
      setLoading(false); // Set loading to false when pins are fetched
    }
  }, [pin]); // Run whenever pin value changes

  return (
    <>
      {star === 0 ? (
        <Upload url={props.url} fetchPins={fetchPins} />
      ) : (
        <div>You don't have access to upload files</div>
      )}
      <div className="file-container">
        <h2>Files List:</h2>
        {
          pin.map((value, index) => (
            <ul key={index}>
              <a href={`${process.env.REACT_APP_URL}/ipfs/${value}`} target="_blank" rel="noopener noreferrer">
                {value}
              </a>
              {star===0?(
                <Delete value={value} fetchPins={fetchPins}/>
              ):
              (<></>)
              }
              
            </ul>
          ))
        }
      </div>
    </>
  );
}

export default View;
  