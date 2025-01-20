// src/components/WheelOfLife.js
import React from 'react';
import RadarChart from './RadarChart';
import '../styles/PointBGoals.css'; // Reuse the same styles

const WheelOfLife = () => {
  return (
    <div className="container">
      
      <div className="card-container">
        <div className="card-content">
        <h4>Wheel of Life (under development)</h4>
          <RadarChart />
        </div>
      </div>
    </div>
  );
};

export default WheelOfLife;