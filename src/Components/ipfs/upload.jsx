import React, { useEffect } from 'react';
import { useState } from "react"
import '../ipfs/view.css'
import { upload } from '@testing-library/user-event/dist/upload';
import CaseContract from '../../case';
import web3 from '../../web3';

function View(props) {
  const [selectedFile, setSelectedFile] = useState()
  const [cid, setCid] = useState()
// this 
    const changeHandler = event => {
      setSelectedFile(event.target.files[0])
    }
    const handleSubmission = async () => {
      try {
        const formData = new FormData()
        formData.append("file", selectedFile)
        const metadata = JSON.stringify({
          name: "File name"
        })
        formData.append("pinataMetadata", metadata)

        const options = JSON.stringify({
          cidVersion: 0
        })
        formData.append("pinataOptions", options)

        const res = await fetch(
          "https://api.pinata.cloud/pinning/pinFileToIPFS",
          {
            method: "POST",
            headers: {
              Authorization: `Bearer ${process.env.REACT_APP_JWT}`
            },
            body: formData
          }
        )
          const resData = await res.json()
          setCid(resData.IpfsHash)
          console.log(resData)
          //props.fetchPins();
           await uploadHash(resData.IpfsHash);
        } catch (error) {
          console.log(error)
      }
    };
    const uploadHash = async (x) => {
      try {        
        const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
        // Call the upload function of the File contract
        //console.log("f", props.url);
    
        const Case1 = CaseContract(props.url);
        const result = web3.utils.sha3(x);
        console.log(result);
        await Case1.methods.upload(x).send({
          from: accounts[0],
          gas: '1000000'
        });
        console.log('Hashcode uploaded successfully.');
        
      } catch (error) {
        console.error('Error uploading hashcode:', error);
      }
    };
    return (
      <>
    <div className="upload-container">
    <h2>Please upload your file:</h2>
    <label className="form-label">
      <input className="button" type="file" onChange={changeHandler} />
    </label>
    <button className="button" onClick={handleSubmission}>Submit</button>
    </div>

    </>
);
}

export default View
