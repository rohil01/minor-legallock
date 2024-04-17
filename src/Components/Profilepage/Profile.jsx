import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import web3 from '../../web3';
import minor from '../../minor';

const Profile = () => {
  const [user, setUser] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const accounts = await web3.eth.getAccounts();
        const userAddress = accounts[0];
        const userDetails = await minor.methods.members(id).call({ from: userAddress });
        setUser(userDetails);
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
    <div>
      <h1>Profile</h1>
      <p>ID: {user.id}</p>
      <p>Name: {user.name}</p>
      <p>Age: {user.age}</p>
      <p>Adhaar: {user.adhaar}</p>
    </div>
  );
};

export default Profile;