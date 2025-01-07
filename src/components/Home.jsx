import React, { useState, useEffect } from 'react';
import SideBar from './SideBar';
import SearchIcon from './SearchIcon';
import ProfileSection from './ProfileSection';
import Overview from './Overview';
import Charts from './Charts';
import PieChartSection from './PieChartSection'; 
import RecentPayments from './RecentPayments'; 
import './Home.css';

const Home = () => {
  const [overviewData, setOverviewData] = useState([]);
  const [supplierData, setSupplierData] = useState([]);
  const [customerData, setCustomerData] = useState([]);
  const [topSellingItems, setTopSellingItems] = useState([]);
  const [supplierPayments, setSupplierPayments] = useState([]);
  const [customerPayments, setCustomerPayments] = useState([]);

  useEffect(() => {
    fetch('/data.json')
      .then((response) => {
        if (!response.ok) {
          throw new Error('Failed to fetch data');
        }
        return response.json();
      })
      .then((data) => {
        const overview = [
          { title: "Total Sales", value: data[0].total_sales, growth: "+5%" },
          { title: "Total Expenses", value: data[0].total_expenses, growth: "-2%" },
          { title: "Net Profit", value: data[0].net_profit, growth: "+10%" },
          { title: "Due Amount", value: data[0].due_amount, growth: "+3%" },
          { title: "Payment Received", value: data[0].payment_received, growth: "+15%" },
        ];

        setOverviewData(overview);
        setSupplierData(data[0].supplier_records);
        setCustomerData(data[0].customer_records);
        setTopSellingItems(data[0].top_selling_products);

        setSupplierPayments(data[0].supplier_payments);
        setCustomerPayments(data[0].customer_payments);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, []);

  return (
    <div className="home-container">
      <SideBar />

      <div className="main-content">
        <div className="top-header">
          <h1 className="top-center-text">Springfield Media</h1>
        </div>

        <div className="search-profile-container">
          <SearchIcon />
          <ProfileSection />
        </div>

        <div className="overview-section">
          <Overview overviewData={overviewData} />
        </div>

        <div className="charts-and-pie">
          <div className="charts-container">
            <Charts supplierData={supplierData} customerData={customerData} />
          </div>
          <div className="pie-chart-container">
            <PieChartSection topSellingItems={topSellingItems} />
          </div>
        </div>

        <div className="recent-payments-section">
          <RecentPayments
            supplierPayments={supplierPayments}
            customerPayments={customerPayments}
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
