import React from 'react';
import { TrendingUp, TrendingDown } from 'lucide-react'; 
import './Overview.css';

const Overview = ({ overviewData }) => {
  return (
    <div className="overview-container">
      {overviewData.map((item, index) => (
        <div
          className="overview-card"
          key={index}
          style={{ backgroundColor: item.growth.startsWith('-') ? '#f4f4f4' : '#eaf8ff' }}
        >
          <h3>{item.title}</h3>
          <div className="overview-card-2">
            <p>{item.value}</p>
            <span
              className="growth"
              style={{ color: item.growth.startsWith('-') ? '#dc3545' : '#28a745' }}
            >
              {item.growth}
              {item.growth.startsWith('-') ? (
                <TrendingDown size={18} style={{ marginLeft: '5px' }} />
              ) : (
                <TrendingUp size={18} style={{ marginLeft: '5px' }} />
              )}
            </span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Overview;
