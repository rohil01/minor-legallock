import React from 'react';
import { Link } from 'react-router-dom';
import './FileListScreen.css';
import Navbar from '../Components/Navbar/Navbar';

const FileListScreen = () => {
  return (
    <div className="fileListScreen">
        <Navbar/>
      <h1>File List</h1>
      <ul className="file-list">
        <li>
          <Link to="/filepreview">File 1</Link>
        </li>
        <li>
          <Link to="/filepreview">File 2</Link>
        </li>
        <li>
          <Link to="/filepreview">File 3</Link>
        </li>
      </ul>
      <Link to="/uploadfile" className="upload-button">
        Upload File
      </Link>
    </div>
  );
};

export default FileListScreen;