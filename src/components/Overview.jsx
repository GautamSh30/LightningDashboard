import React from 'react';
import './Overview.css';

const Overview = ({ overviewData }) => {
  return (
    <div className="overview-container">
      {overviewData.map((item, index) => (
        <div className="overview-card" key={index}>
          <h3>{item.title}</h3>
          <p>{item.value}</p>
          <span className="growth">{item.growth}</span>
        </div>
      ))}
    </div>
  );
};

export default Overview;
