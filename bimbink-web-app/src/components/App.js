import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect, Link } from 'react-router-dom';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from '../firebase';
import Login from './Login';
import Signup from './Signup';
import Profile from './Profile';
import ErrorPage from './ErrorPage';

const App = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
    return () => unsubscribe();
  }, []);

  return (
    <Router>
      <nav className="navbar">
        <div className="nav-wrapper">
          <a href="/" className="brand-logo">bimbink</a>
          <ul id="nav-mobile" className="right hide-on-med-and-down">
            {user ? (
              <li><Link to="/profile">Profile</Link></li>
            ) : (
              <>
                <li><Link to="/login">Login</Link></li>
                <li><Link to="/signup">Signup</Link></li>
              </>
            )}
          </ul>
        </div>
      </nav>
      <Switch>
        <Route exact path="/">
          {user ? <Redirect to="/profile" /> : <Login />}
        </Route>
        <Route path="/login">
          {user ? <Redirect to="/profile" /> : <Login />}
        </Route>
        <Route path="/signup">
          {user ? <Redirect to="/profile" /> : <Signup />}
        </Route>
        <Route path="/profile">
          {user ? <Profile /> : <Redirect to="/login" />}
        </Route>
        <Route component={ErrorPage} />
      </Switch>
    </Router>
  );
};

export default App;