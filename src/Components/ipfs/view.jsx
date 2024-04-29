import React, { useEffect, useState } from 'react';
import '../ipfs/view.css';
import { Button, Card ,Input} from 'semantic-ui-react';

import minor from '../../minor';
import { useParams } from 'react-router-dom';
import Upload from './upload';
import Delete from './delete';
import CaseContract from '../../case';
import CaseFactory from '../../CaseFactory'
function View(props) {
  const [pin, setPin] = useState([]);
  const { id } = useParams();
  const [star, setStar] = useState(0);
  const [pinsFetched, setPinsFetched] = useState(false); // State to track if pins have been fetched
  const [loading, setLoading] = useState(true); // State to track loading state
  const [address,setAddress] = useState()
  const [jud,setJ]=useState();
  const fetch = require("node-fetch");
  const [fun, setF] =useState("0x0000000000000000000000000000000000000000")
  const handleChange = (e) => {
    const { name, value } = e.target;
    console.log(value);
    setAddress(value);
  };
  useEffect(() => {
    const fetchStar = async () => {
      try {
        const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
        const add = accounts[0]; // Assuming user has at least one address   
        let id = await minor.methods.id(accounts[0]).call(); 
        id = parseInt(id);        
        const userStarValue = await minor.methods.members(id-1).call();
        setStar(parseInt(userStarValue.star));
        console.log(userStarValue.star);
        
        const judge= await CaseFactory.methods.CaseToJudge(props.url).call();
        
        setJ((judge))
      } catch (error) {
        console.error('Error fetching user star value:', error);
      }      
    };
    fetchStar();
  }, [id]);    
  
  const fetchPins = async () => {
    console.log("code running");
    
    
    try {
      let pinHashes = [];
      const Case = CaseContract(props.url);
      pinHashes = await Case.methods.fetchAddr().call();    
      console.log('Total pins fetched: ', pinHashes.length);
      setPin(pinHashes);
      setPinsFetched(true); // Set pinsFetched to true after fetching pins
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (!pinsFetched) { // Check if pins have not been fetched yet
      fetchPins();
    }
  }, [pinsFetched]); // Run only when pinsFetched changes

  useEffect(() => {
    if (pin.length >= 0) {
      setLoading(false); // Set loading to false when pins are fetched
      // fetchFileNames();
    }
  }, [pin]); // Run whenever pin value changes
  const onsubmit= async ()=>{
    const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
    await CaseFactory.methods.assignJudge(address, props.url).send({
      from: accounts[0]
    })
  }
  return (
    <>
      
      {star === 0|| star===1 ? (
        <Upload url={props.url} fetchPins={fetchPins} />
      ) : (
        <div>You don't have access to upload files</div>
      )}
      {(star === 4 && jud===fun) ? (
        <div className='admin-container'>
        <h2>Enter Judge Address: (Wallet Address)</h2>
        <Input
          type='input'
          placeholder='Address'
          name='star'
          onChange={handleChange}
          fluid
        />
        <Button onClick={onsubmit}>Submit data</Button>
    </div>
        
        
      ) : (
        <div></div>
      )}
      {(star === 4 && jud!==fun) ? (
        <div className='admin-container'>
          <div>Judge Address is: {jud}</div>
        </div>
        
        
      ) : (
        <div></div>
      )}

      <div className="file-container">
        <h2>Files List:</h2>
        {
          pin.map((value, index) => (
            <ul key={index}>
              <a href={`https://${process.env.REACT_APP_URL}/ipfs/${value}`} target="_blank" rel="noopener noreferrer">
                {/* {fileNames[value] || 'Loading...'} */}
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
