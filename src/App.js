import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LoginScreen from './screens/LoginScreen';
import SignupForm from './Components/SignupForm/SignUpForm';
import DashboardScreen from './screens/DashboardScreen';
import Profile from './Components/Profilepage/Profile';
import Home from './Components/Home/Home';
import View from './Components/ipfs/view';
import ViewFile from './screens/viewFile';

import UploadCase from './screens/uploadcase.jsx'
import Caseview from './screens/Caseview.js' //here
import Admin from './screens/Admin.js'
import Insert from './screens/Insertmember.js'
const App = () => {


  return (
    
    <div >
    <Router>
      <Routes>
        <Route path="/" element={<LoginScreen />} />
        <Route path="/signup" element={<SignupForm />} />
        <Route path="/dashboard" element={<DashboardScreen />} />
        <Route path="/dashboard/new" element={<UploadCase />} />
        <Route path="/viewfile" element={<ViewFile />} /> 
        <Route path="/view" element={<View />} /> 
        <Route path="/dashboard/cases/:url" element={<Caseview />} />
        <Route path="/profile/:id" element={<Profile />} />
        <Route path="/Home" element={<Home />} />
        <Route path="/admin" element={<Admin/>} />
        <Route path="/admin/new" element={<Insert />} />
      </Routes>
    </Router>
    </div>
  );
};

export default App;
