import React from 'react';
import './SupplierPayments.css';

const SupplierPayments = ({ payments }) => {
  return (
    <div className="supplier-payments-container">
      <h3>Recent Supplier Payments</h3>
      <table>
        <thead>
          <tr>
            <th>Record No</th>
            <th>Farmer Name</th>
            <th>Net Amount</th>
            <th>Paid Amount</th>
            <th>Due Amount</th>
            <th>Payment Status</th>
          </tr>
        </thead>
        <tbody>
          {payments.map((payment, index) => (
            <tr key={index}>
              <td>{payment.record_no}</td>
              <td>{payment.farmer_name}</td>
              <td>{payment.net_amount}</td>
              <td>{payment.paid_amount}</td>
              <td>{payment.due_amount}</td>
              <td>{payment.payment_status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default SupplierPayments;
