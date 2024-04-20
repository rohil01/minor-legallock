import React, { useEffect, useState } from 'react';
import '../ipfs/view.css';
import Upload from './upload';

function View() {
  const [pin, setPin] = useState([]);
  const [star, setStar] = useState(1);
  const [pinsFetched, setPinsFetched] = useState(false); // State to track if pins have been fetched
  const [loading, setLoading] = useState(true); // State to track loading state

  const PINATA_JWT = `Bearer ${process.env.REACT_APP_JWT}`;
  const PIN_QUERY = `https://api.pinata.cloud/data/pinList?status=pinned&pageLimit=1000&includeCount=false`;
  const fetch = require("node-fetch");
  useEffect(()=>{
    let star;
    //yaha pr user ki kitni restriction hai woh call kro
    //profile.jsx pr user details call kri hai similar function bnega
    //bs user details.star value nikalni hai apne ko

  })

  const fetchPins = async () => {
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
      {star === 1 ? (
        <Upload fetchPins={fetchPins} />
      ) : (
        <div>You don't have access to upload files</div>
      )}
      <div className="file-container">
        <h1>Files List</h1>
        {
          pin.map((value, index) => (
            <ul key={index}>
              <a href={`${process.env.REACT_APP_URL}/ipfs/${value}`} target="_blank" rel="noopener noreferrer">
                {value}
              </a>
            </ul>
          ))
        }
      </div>
    </>
  );
}

export default View;
  