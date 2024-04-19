import React from 'react';
import { useState } from "react"

function View() {
  const [selectedFile, setSelectedFile] = useState()
  const [cid, setCid] = useState()
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
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <>
      <label className="form-label">Choose File</label>
      <input type="file" onChange={changeHandler} />
      <button onClick={handleSubmission}>Submit</button>
      {cid && (
        <div>
          <p>Uploaded File: {selectedFile.name}</p>
          {selectedFile.type.startsWith("image/") ? (
            <img
              src={`${process.env.REACT_APP_GATEWAY_URL}/ipfs/${cid}`}
              alt={`Uploaded image: ${selectedFile.name}`}
            />
          ) : (
            <a
              href={`${process.env.REACT_APP_GATEWAY_URL}/ipfs/${cid}`}
              download={selectedFile.name}
            >
              Download File: {selectedFile.name}
            </a>
          )}
        </div>
      )}
    </>
  );
}

export default View
