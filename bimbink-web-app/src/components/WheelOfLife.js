// src/components/WheelOfLife.js
import React from 'react';
import RadarChart from './RadarChart';
import '../styles/PointBGoals.css'; // Reuse the same styles

const WheelOfLife = () => {
  return (
    <div className="container">
      <h6>Wheel of Life (under development)</h6>
      <div className="card">
        <div className="card-content">
          <RadarChart />
        </div>
      </div>
    </div>
  );
};

export default WheelOfLife;