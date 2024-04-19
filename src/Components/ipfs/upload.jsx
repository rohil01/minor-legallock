import { useState } from "react"

function Upload() {
  const [selectedFile, setSelectedFile] = useState()
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
      console.log(resData)
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <>
      <label className="form-label"> Choose File</label>
      <input type="file" onChange={changeHandler} />
      <button onClick={handleSubmission}>Submit</button>
    </>
  )
}

export default Upload
