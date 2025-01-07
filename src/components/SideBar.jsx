import React from 'react';
import './SideBar.css'; 
import { MessageCircle,LayoutDashboard,Layers,Calendar,Plane,Users } from 'lucide-react';

const SideBar = () => {
  return (
    <div className="sidebar">
      <div className="sidebar-top">
        <img
          src="/logo.png"
          alt="Logo"
          className="sidebar-logo"
        />
      </div>

      <div className="sidebar-options">
        <div className="sidebar-item"> <LayoutDashboard />Dashboard</div>
        <div className="sidebar-item"> <Layers />Menu 1</div>
        <div className="sidebar-item"> <Calendar />Menu 2</div>
        <div className="sidebar-item"> <Plane />Menu 3</div>
        <div className="sidebar-item"> <Users />Admin Panel</div>
      </div>

      <div className="sidebar-support">
        <button className="support-button">
        <MessageCircle />
          Support
        </button>
      </div>

    </div>
  );
};

export default SideBar;
