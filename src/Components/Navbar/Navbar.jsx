import React, { useState , useEffect} from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import logo_light from '../../Assets/LegalLock-logos_black.png';
import logo_dark from '../../Assets/LegalLock-logos_white.png';
import search_icon_light from '../../Assets/search-w.png';
import search_icon_dark from '../../Assets/search-b.png';
import toggle_light from '../../Assets/night.png';
import toggle_dark from '../../Assets/day.png';
//import { useSelector } from 'react-redux';
import Profile from '../Profilepage/Profile';
import Home from '../Home/Home';

const Navbar = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  //const currentUser = useSelector((state) => state.user.currentUser);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  const handleProfileClick = () => {
    window.location.href = `/Profile/${currentUser.id}`;
  };

  return (
    <div className={`Navbar ${isDarkMode ? 'dark-mode' : ''}`}>
      <img src={isDarkMode ? logo_dark : logo_light} style={{ width: '200px', height: 'auto' }} alt="LegalLock " className="logo" />
      <ul>
        <li><Link to="/Home">Home</Link></li>
        <li onClick={{handleProfileClick}}>Profile</li>
      </ul>

      <div className="search-box">
        <input type="text" placeholder="Search" />
        <img src={isDarkMode ? search_icon_dark : search_icon_light} alt="" />
      </div>

      <img src={isDarkMode ? toggle_light : toggle_dark} style={{ width: '50px', height: 'auto' }} alt="" className="toggle-icon" onClick={toggleTheme} />
    </div>
  )
}

export default Navbar;