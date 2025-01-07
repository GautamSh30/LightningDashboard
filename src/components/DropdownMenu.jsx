import React, { useState, useEffect, useRef } from 'react';
import {
  User,
  Bell,
  FileText,
  Settings,
  HelpCircle,
  Info,
  LogOut,
} from 'lucide-react';
import NotificationDropdown from './NotificationDropdown';
import './DropdownMenu.css';

const DropdownMenu = ({ onClose }) => {
  const dropdownRef = useRef(null);
  const [showNotifications, setShowNotifications] = useState(false);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        onClose();
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [onClose]);

  const toggleNotifications = (e) => {
    e.stopPropagation();
    setShowNotifications((prev) => !prev);
  };

  return (
    <div className="dropdown-container" ref={dropdownRef}>
      <ul className="dropdown-menu">
        <li className="dropdown-item">
          <User className="icon" />
          Profile
        </li>
        <li className="dropdown-item" onClick={toggleNotifications}>
          <Bell className="icon" />
          Notifications
        </li>
        {showNotifications && (
          <NotificationDropdown onClose={() => setShowNotifications(false)} />
        )}
        <li className="dropdown-item">
          <FileText className="icon" />
          Change Firm
        </li>
        <li className="dropdown-item">
          <Settings className="icon" />
          Settings
        </li>
        <li className="dropdown-item">
          <HelpCircle className="icon" />
          Help/Support
        </li>
        <li className="dropdown-item">
          <Info className="icon" />
          About (Version Info)
        </li>
        <li className="dropdown-item">
          <LogOut className="icon" />
          Logout
        </li>
      </ul>
    </div>
  );
};

export default DropdownMenu;
