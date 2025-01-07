import React from 'react';
import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer } from 'recharts';
import './PieChartSection.css';

const PieChartSection = ({ topSellingItems }) => {
    const COLORS = ['#6C63FF', '#4AC4F3', '#B0E4FF', '#D8DFF2'];

  return (
    <div className="pie-chart-section">
      <h3>Top Selling Items</h3>
      <ResponsiveContainer width="100%" height={200}>
        <PieChart>
          <Pie
            data={topSellingItems}
            dataKey="weight"
            nameKey="item"
            cx="50%"
            cy="50%"
            outerRadius={60}
            fill="#8884d8"
          >
            {topSellingItems.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
          <Tooltip />
        </PieChart>
      </ResponsiveContainer>
      <ul className="legend">
        {topSellingItems.map((item, index) => (
          <li key={index} style={{ color: COLORS[index % COLORS.length] }}>
            {item.item}: {item.weight} kg
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PieChartSection;
