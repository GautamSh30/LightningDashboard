import React from "react";
import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer } from "recharts";
import "./PieChartSection.css";

const PieChartSection = ({ topSellingItems }) => {
  const COLORS = ["#6C63FF", "#4AC4F3", "#B0E4FF", "#D8DFF2"];
//   console.log(topSellingItems);
  return (
    <div className="pie-chart-section">
      <h3>Top Selling Items</h3>
      <ResponsiveContainer width="100%" height={250}>
        <PieChart>
          <Pie
            data={topSellingItems.slice(0, 4)} // Display only the top 4 items
            dataKey="weight"
            nameKey="item"
            cx="50%"
            cy="50%"
            outerRadius={80}
            innerRadius={40}
            cornerRadius={3}
            strokeWidth={2}
          >
            {topSellingItems.slice(0, 4).map((entry, index) => (
              <Cell
                key={`cell-${index}`}
                fill={COLORS[index % COLORS.length]}
              />
            ))}
          </Pie>
          <Tooltip />
        </PieChart>
      </ResponsiveContainer>
      <ul className="legend">
        {topSellingItems.slice(0, 4).map((item, index) => (
          <li key={index}>
            <span
              className="legend-dot"
              style={{ backgroundColor: COLORS[index % COLORS.length] }}
            ></span>
            {item.item}: {item.weight} kg
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PieChartSection;
