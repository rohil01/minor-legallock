import React from 'react';
import { Link } from 'react-router-dom';
import './UploadFileScreen.css';
import '../Components/Navbar/Navbar';
import Navbar from '../Components/Navbar/Navbar';

const UploadFileScreen = () => {
  return (
    <div className="uploadFileScreen">
        <Navbar />
      <h1>Upload File</h1>
      <form>
        <div className="form-group">
          <label htmlFor="fileInput">Select a file</label>
          <input type="file" className="form-control" id="fileInput" />
        </div>
        <button type="submit" className="upload-button">
          Upload
        </button>
      </form>
      <Link to="/" className="back-button">
        Back to Home
      </Link>
    </div>
  );
};

export default UploadFileScreen;