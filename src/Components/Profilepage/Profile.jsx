import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import web3 from '../../web3';
import minor from '../../minor';
import './Profile.css';
import Navbar from "../Navbar/Navbar.jsx";

const Profile = () => {
  const [user, setUser] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    console.log(id);
    const fetchUser = async () => {
      try {       
        const userDetails = await minor.methods.members(id-1).call();
        setUser(userDetails);
        console.log(userDetails);
      } catch (error) {
        console.error('Error fetching user details:', error);
      }
    };

    fetchUser();
  }, [id]);

  if (!user) {
    return <div>Loading...</div>;
  }

  return (
    <div className= "profile-container" >
    <Navbar />
      <div className="profile-content">
      <div className="user-details-wrapper">
            <h1 className="profile-title">USER DETAILS</h1>
              <div className = "data-container">
                <div className="data-row">
                  <p className="data-label">ID:</p>
                  <p className="data-value">{parseInt(user.id)}</p>
                </div>
                <div className="data-row">
                  <p className="data-label">Name:</p>
                  <p className="data-value">{user.name}</p>
                </div>
                <div className="data-row">
                  <p className="data-label">Age:</p>
                  <p className="data-value">{parseInt(user.age)}</p>
                </div>
                <div className="data-row">
                  <p className="data-label">Adhaar:</p>
                  <p className="data-value">{parseInt(user.adhaar)}</p>
                </div>
                <div className="data-row">
                  <p className="data-label">Access:</p>
                  <p className="data-value">{parseInt(user.star) === 0 ? "Judge" : parseInt(user.star) === 1 ? "Lawyer" : "Client"}</p>
                </div>
              </div>
            </div>
            </div>
        </div>
  );
};

export default Profile;