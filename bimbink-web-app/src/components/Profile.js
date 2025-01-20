import React from "react";
import { auth } from "../firebase";
import { useHistory } from "react-router-dom";
import RadarChart from "./RadarChart";
import "../styles/Profile.css";

const Profile = () => {
  const user = auth.currentUser;
  const history = useHistory();

  const handleLogout = async () => {
    await auth.signOut();
    history.push("/login");
  };

  return (
    <div className="profile-container">
      <div className="card-container">
        {user && (
          <div className="card">
            <div className="card-content">
              <h5>Profile</h5>
              <p>Email: {user.email}</p>
              <button onClick={handleLogout}>Logout</button>
            </div>
          </div>
        )}
        <div className="card">
          <img src="/bimbink-logo-512.png" alt="Point B Goals" className="card-image" />
          <div className="card-content">
            <h5>Point B Goals</h5>
            <p>
              This technique allows you to focus the target (aka `Point B`) goals and eventually compare them with what
              you have right now (aka `Point A`). You can use this technique to set your goals and track your progress.
              <br/><br/><br/>
              Enjoy the transformation!
            </p>
          </div>
        </div>
        <div className="card">
          <img src="/bimbink-logo-512.png" alt="Wheel of Life" className="card-image" />
          <div className="card-content">
            <h5>Wheel of Life</h5>
            <p>This technique allows you to capture the `score` of different areas of your life so that 
              You can read more about this technique <a target="_blank" href="https://www.communicationtheory.org/wheel-of-life-a-motivation-guide-by-paul-j-meyer/">here</a></p>
            <RadarChart />
          </div>
        </div>
        <div className="card">
          <img src="https://m.media-amazon.com/images/I/41E4E8bLQnL._SY466_.jpg" alt="108 Wishes" className="card-image" />
          <div className="card-content">
            <h5>108 Wishes</h5>
            <p>Add as many as wishes as you can. Analyze them. This method allows you to focus on what you really want.
              Plus, you will realize that it is not that easy to define more than 60-80 wishes.
              <br/><br/>
              And <a target="_blank" href="https://www.amazon.com/Game-108-Wishes-journal-notebook/dp/1655536753">here is</a> something to read about it.
            </p>
          </div>
        </div>
        <div className="card">
          <img src="/bimbink-logo-512.png" alt="SMART" className="card-image" />
          <div className="card-content">
            <h5>SMART Goals</h5>
            <p>When you define the goals, try to follow the SMART concepts: goals must be Specific, Measurable, Achievable, Relevant, Time-bound.
              You can read more about SMART goals <a target="_blank" href="https://en.wikipedia.org/wiki/SMART_criteria">here</a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
