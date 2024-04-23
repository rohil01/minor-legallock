import React, { useEffect, useState } from 'react';
import '../ipfs/view.css';
import minor from '../../minor';
import { useParams } from 'react-router-dom';
import Upload from './upload';
import Delete from './delete';

function View() {
  const [pin, setPin] = useState([]);
  const { id } = useParams();
  const [star, setStar] = useState();
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
         console.log(star);
      }catch (error) {
        console.error('Error fetching user star value:', error);
    }      
   };
  fetchStar();
 },[id]);    
    //yaha pr user ki kitni restriction hai woh call kro
    //profile.jsx pr user details call kri hai similar function bnega
    //bs user details.star value nikalni hai apne ko

  
  const fetchPins = async () => {
    console.log("code running");
    try {
      let pinHashes = [];
      let pageOffset = 0;
      let hasMore = true;

      while (hasMore === true) {
        try {
          const response = await fetch(`${PIN_QUERY}&pageOffset=${pageOffset}`, {
            method: 'GET',
            headers: {
              accept: 'application/json',
              Authorization: PINATA_JWT
            }
          });

          const responseData = await response.json();
          const rows = responseData.rows;

          if (rows.length === 0) {
            hasMore = false;
          }

          const itemsReturned = rows.length;
          pinHashes.push(...rows.map(row => row.ipfs_pin_hash));
          pageOffset += itemsReturned;
        } catch (error) {
          console.log(error);
          break;
        }
      }

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
        <Upload fetchPins={fetchPins} />
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
  