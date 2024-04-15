import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LoginScreen from './screens/LoginScreen';
import DashboardScreen from './screens/DashboardScreen';
import FileListScreen from './screens/FileListScreen';
import UploadFileScreen from './screens/UploadFileScreen';


const App = () => {


  return (
    
    <div >
    <Router>
      <Routes>
        <Route path="/" element={<LoginScreen />} />
        <Route path="/dashboard" element={<DashboardScreen />} />
        <Route path="/filelist" element={<FileListScreen />} />
        <Route path="/uploadfile" element={<UploadFileScreen />} />
      </Routes>
    </Router>
    </div>
  );
};

export default App;
