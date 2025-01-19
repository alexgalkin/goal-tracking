import React from 'react';
import { auth } from '../firebase';
import { useHistory } from 'react-router-dom';

const Profile = () => {
  const user = auth.currentUser;
  const history = useHistory();

  const handleLogout = async () => {
    await auth.signOut();
    history.push('/login');
  };

  return (
    <div>
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