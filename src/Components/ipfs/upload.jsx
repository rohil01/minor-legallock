import React, { useEffect } from 'react';
import { useState } from "react"
import '../ipfs/view.css'


function View(props) {
  const [selectedFile, setSelectedFile] = useState()
  const [cid, setCid] = useState()
//   const uploadToBlockchain = async ipfsHash=>{
//     try {
//     const response = await fetch(
//       "YOUR_CONTRACT_ADDRESS", // Replace with your contract address
//       {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json"
//         },
//         body: JSON.stringify({
//           ipfsHash: ipfsHash
//         })
//       }
//     );

//     if (response.ok) {
//       console.log("IPFS hash uploaded to blockchain successfully");
//     } else {
//       console.log("Error uploading IPFS hash to blockchain");
//     }
//   } catch (error) {
//     console.log("Error uploading IPFS hash to blockchain:", error);
//     }
//   };
//   }
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
        //await uploadToBlockchain(resData.IpfsHash);
      } catch (error) {
        console.log(error)
    }
  }
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
