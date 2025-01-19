import React from 'react';
import { auth } from '../firebase';
import { useHistory } from 'react-router-dom';
import '../styles/Profile.css';

const Profile = () => {
  const user = auth.currentUser;
  const history = useHistory();

  const handleLogout = async () => {
    await auth.signOut();
    history.push('/login');
  };

  return (
    <div className="profile-container">
      <h2>Profile</h2>
      {user && (
        <div>
          <p>Email: {user.email}</p>
          <button onClick={handleLogout}>Logout</button>
        </div>
      )}
    </div>
  );
};

export default Profile;