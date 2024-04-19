import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LoginScreen from './screens/LoginScreen';
import SignupForm from './Components/SignupForm/SignUpForm';
import DashboardScreen from './screens/DashboardScreen';
import FileListScreen from './screens/FileListScreen';
import UploadFileScreen from './screens/UploadFileScreen';
import Profile from './Components/Profilepage/Profile';
import Home from './Components/Home/Home';
import UploadFile from './screens/uploadFile';
import ViewFile from './screens/viewFile';
import DeleteFile from './screens/deleteFile';


const App = () => {


  return (
    
    <div >
    <Router>
      <Routes>
        <Route path="/" element={<LoginScreen />} />
        <Route path="/signup" element={<SignupForm />} />
        <Route path="/dashboard" element={<DashboardScreen />} />
        <Route path="/filelist" element={<FileListScreen />} />
        <Route path="/uploadfile" element={<UploadFileScreen />} />
        <Route path="/profile/:id" element={<Profile />} />
        <Route path="/Home" element={<Home />} />
      </Routes>
    </Router>
    </div>
  );
};

export default App;
