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
        <Route path="/minor-legallock" element={<LoginScreen />} />
        <Route path="/minor-legallock/signup" element={<SignupForm />} />
        <Route path="/minor-legallock/dashboard" element={<DashboardScreen />} />
        <Route path="/minor-legallock/dashboard/new" element={<UploadCase />} />
        <Route path="/minor-legallock/viewfile" element={<ViewFile />} /> 
        <Route path="/minor-legallock/view" element={<View />} /> 
        <Route path="/minor-legallock/dashboard/cases/:url" element={<Caseview />} />
        <Route path="/minor-legallock/profile/:id" element={<Profile />} />
        <Route path="/minor-legallock/Home" element={<Home />} />
        <Route path="/minor-legallock/admin" element={<Admin/>} />
        <Route path="/minor-legallock/admin/new" element={<Insert />} />
      </Routes>
    </Router>
    </div>
  );
};

export default App;
