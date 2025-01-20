// src/components/RadarChart.js
import React from 'react';
import { Radar } from 'react-chartjs-2';
import { Chart as ChartJS, RadialLinearScale, PointElement, LineElement, Filler, Tooltip, Legend } from 'chart.js';

ChartJS.register(RadialLinearScale, PointElement, LineElement, Filler, Tooltip, Legend);

const RadarChart = () => {
  const data = {
    labels: ['Family', 'Career', 'Finance', 'Health', 'Personal Growth', 'Fun & Recreation', 'Physical Environment'],
    datasets: [
      {
        label: 'Current Score',
        data: [3, 4, 2, 5, 4, 3, 4],
        backgroundColor: 'rgba(34, 202, 236, 0.2)',
        borderColor: 'rgba(34, 202, 236, 1)',
        borderWidth: 1,
      },
      {
        label: 'Target Score',
        data: [5, 5, 5, 5, 5, 5, 5],
        backgroundColor: 'rgba(255, 99, 132, 0.2)',
        borderColor: 'rgba(255, 99, 132, 1)',
        borderWidth: 1,
      },
    ],
  };

  const options = {
    scales: {
      r: {
        angleLines: {
          display: false,
        },
        suggestedMin: 0,
        suggestedMax: 5,
      },
    },
  };

  return <Radar data={data} options={options} />;
};

export default RadarChart;
