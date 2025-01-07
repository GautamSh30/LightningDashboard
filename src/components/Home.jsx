import React, { useState, useEffect } from "react";
import SideBar from "./SideBar";
import SearchIcon from "./SearchIcon";
import ProfileSection from "./ProfileSection";
import Overview from "./Overview";
import Charts from "./Charts";
import PieChartSection from "./PieChartSection";
import RecentPayments from "./RecentPayments";
import { useLocation } from "react-router-dom";
import "./Home.css";

const Home = () => {
  const [overviewData, setOverviewData] = useState([]);
  const [supplierData, setSupplierData] = useState([]);
  const [customerData, setCustomerData] = useState([]);
  const [topSellingItems, setTopSellingItems] = useState([]);
  const [supplierPayments, setSupplierPayments] = useState([]);
  const [customerPayments, setCustomerPayments] = useState([]);

  const query = new URLSearchParams(useLocation().search);

  useEffect(() => {
    const date = query.get("date") || "01-01-2025"; 
    fetch("/data.json")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }
        return response.json();
      })
      .then((data) => {
        data.sort((a, b) => new Date(a.date) - new Date(b.date));

        const selectedData = data.find(item => item.date === date);

        if (selectedData) {
          const currentIndex = data.findIndex(item => item.date === date);
          const previousData = currentIndex > 0 ? data[currentIndex - 1] : null; 

          const calculateGrowth = (currentValue, previousValue) => {
            if (!previousValue || !currentValue) return "+0%"; 
            const growth = ((parseFloat(currentValue) - parseFloat(previousValue)) / parseFloat(previousValue)) * 100;
            return `${growth.toFixed(2)}%`;
          };

          const overview = [
            { 
              title: "Total Sales", 
              value: selectedData.total_sales, 
              growth: previousData ? calculateGrowth(selectedData.total_sales, previousData.total_sales) : "+0%" 
            },
            { 
              title: "Total Expenses", 
              value: selectedData.total_expenses, 
              growth: previousData ? calculateGrowth(selectedData.total_expenses, previousData.total_expenses) : "+0%" 
            },
            { 
              title: "Net Profit", 
              value: selectedData.net_profit, 
              growth: previousData ? calculateGrowth(selectedData.net_profit, previousData.net_profit) : "+0%" 
            },
            { 
              title: "Due Amount", 
              value: selectedData.due_amount, 
              growth: previousData ? calculateGrowth(selectedData.due_amount, previousData.due_amount) : "+0%" 
            },
            { 
              title: "Payment Received", 
              value: selectedData.payment_received, 
              growth: previousData ? calculateGrowth(selectedData.payment_received, previousData.payment_received) : "+0%" 
            },
          ];

          setOverviewData(overview);
          setSupplierData(selectedData.supplier_records);
          setCustomerData(selectedData.customer_records);
          setTopSellingItems(selectedData.top_selling_products);
          setSupplierPayments(selectedData.supplier_payments);
          setCustomerPayments(selectedData.customer_payments);
        } else {
          console.error("No data found for the specified date:", date);
        }
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, [query]);

  // console.log(overviewData)

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
