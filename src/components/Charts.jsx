import React from 'react';
import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip, Legend } from 'recharts';
import './Charts.css';

const Charts = ({ supplierData, customerData }) => {
  // Merge data for both supplier and customer records
  const chartData = supplierData.map((supplier, index) => ({
    month: supplier.month,
    supplier: supplier.bags,
    customer: customerData[index]?.bags || 0,
  }));

  return (
    <div className="chart-container">
      <h3>Monthly Records Overview</h3>
      <LineChart
        width={800}
        height={400}
        data={chartData}
        margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="month" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line type="monotone" dataKey="supplier" stroke="#8884d8" name="Supplier Records" />
        <Line type="monotone" dataKey="customer" stroke="#82ca9d" name="Customer Records" />
      </LineChart>
    </div>
  );
};

export default Charts;
