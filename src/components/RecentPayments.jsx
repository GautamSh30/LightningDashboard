import React from "react";
import "./RecentPayments.css";

const RecentPayments = ({ supplierPayments, customerPayments }) => {
  // console.log(supplierPayments, customerPayments);
  return (
    <div className="recent-payments">
      {/* Supplier Payments Section */}
      <div className="supplier-payments">
        <h2>Recent Supplier Payments</h2>
        <table className="payments-table">
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
            {supplierPayments.map((payment, index) => (
              <tr key={index}>
                <td>{payment.record_no}</td>
                <td>{payment.farmer_name}</td>
                <td>Rs. {payment.net_amount}</td>
                <td>Rs. {payment.paid_amount}</td>
                <td>Rs. {payment.due_amount}</td>
                <td>
                  <span
                    className={`status-badge ${
                      payment.payment_status === "Paid"
                        ? "status-done"
                        : "status-hold"
                    }`}
                  >
                    {payment.payment_status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Customer Payments Section */}
      <div className="customer-payments">
        <h2>Recent Customer Payments</h2>
        <table className="payments-table">
          <thead>
            <tr>
              <th>Record No</th>
              <th>Customer Name</th>
              <th>Payment Date</th>
              <th>Payment Mode</th>
              <th>Paid Amount</th>
              <th>Voucher No</th>
            </tr>
          </thead>
          <tbody>
            {customerPayments.map((payment, index) => (
              <tr key={index}>
                <td>{payment.record_no}</td>
                <td>{payment.customer_name}</td>
                <td>{payment.payment_date}</td>
                <td>{payment.payment_mode}</td>
                <td>Rs. {payment.paid_amount}</td>
                <td>{payment.voucher_no}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default RecentPayments;
