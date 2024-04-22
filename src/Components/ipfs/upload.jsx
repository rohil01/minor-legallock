import React, { useEffect } from 'react';
import { useState } from "react"
import '../ipfs/view.css'


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
          props.fetchPins();
          // await uploadHash(ipfsHash);
        } catch (error) {
          console.log(error)
      }
    };
    const uploadHash = async (ipfsHash) => {
      try {
        // Call the upload function of the File contract
        await props.fileContract.methods.upload(ipfsHash).send({
          from: '/* Your Ethereum account address */',
          
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
