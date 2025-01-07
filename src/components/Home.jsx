import React, { useState } from 'react';
import SideBar from './SideBar';
import SearchIcon from './SearchIcon';
import ProfileSection from './ProfileSection';
import './Home.css';

const Home = () => {
  return (
    <div className="home-container">
      {/* Sidebar */}
      <SideBar />

      {/* Main Content */}
      <div className="main-content">
        {/* Top Header */}
        <div className="top-header">
          <h1 className="top-center-text">Springfield Media</h1>
        </div>

        {/* Search and Profile Section */}
        <div className="search-profile-container">
          <SearchIcon />
          <ProfileSection />
        </div>

        {/* Overview Section */}
        <div className="overview-section">
          <h2>Overview</h2>
          <div className="overview-cards">
            <div className="card">Total Sales: 7,265</div>
            <div className="card">Total Expenses: 3,671</div>
            <div className="card">Net Profit: 156</div>
            <div className="card">Due Amount: 2,318</div>
            <div className="card">Payment Received: 6</div>
          </div>
        </div>

        {/* Other Sections */}
        <div className="other-sections">
          <div className="chart">Chart Placeholder</div>
          <div className="top-selling-items">
            <h3>Top Selling Items</h3>
            <ul>
              <li>Potato: 190kg</li>
              <li>Onion: 112kg</li>
              <li>Tomato: 83kg</li>
              <li>Garlic: 36kg</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
