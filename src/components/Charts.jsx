import React, { useState } from 'react';
import { LineChart, Line, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import './Charts.css';
import CustomTooltip from "./CustomTooltip"; 

const Charts = ({ supplierData, customerData }) => {
  const [filter, setFilter] = useState('month');

  const chartData = supplierData.map((supplier, index) => ({
    month: supplier.month,
    supplier: supplier.bags,
    customer: customerData[index]?.bags || 0,
  }));

  const handleFilterChange = (e) => {
    setFilter(e.target.value);
  };

  return (
    <div className="chart-container">
      <div className="chart-header">
        <h2>Bags</h2>
        <select className="chart-dropdown" value={filter} onChange={handleFilterChange}>
          <option value="month">Month</option>
        </select>
      </div>

      <ResponsiveContainer width="100%" height={400}>
        <LineChart data={chartData} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
          <YAxis
            tickFormatter={(value) => (value === 0 ? `${value}` : `${value / 1000}k`)}
            ticks={[0, 5000, 10000, 15000]}
            axisLine={false}
            tickLine={false}
          />
          <XAxis dataKey="month" axisLine={false} tickLine={false} />
          <Tooltip content={<CustomTooltip />} />
          <Legend
            formatter={(value, entry) => (
              <span style={{ display: 'flex', alignItems: 'center' }}>
                <span
                  style={{
                    width: '8px',
                    height: '8px',
                    backgroundColor: entry.color,
                    borderRadius: '50%',
                    display: 'inline-block',
                    marginRight: '5px',
                  }}
                ></span>
                <span style={{ color: '#000000' }}>{value}</span>
              </span>
            )}
          />
          <Line
            type="monotone"
            dataKey="supplier"
            stroke="grey" 
            strokeWidth={2.5}
            name="Supplier Records"
            dot={false}
          />
          <Line
            type="monotone"
            dataKey="customer"
            stroke="skyblue" 
            strokeWidth={2.5}
            strokeDasharray="5 5"
            name="Customer Records"
            dot={false}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default Charts;
