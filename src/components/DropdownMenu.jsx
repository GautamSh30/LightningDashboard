import React from 'react';
import {
  User,
  Bell,
  FileText,
  Settings,
  HelpCircle,
  Info,
  LogOut,
} from 'lucide-react';
import './DropdownMenu.css';

const DropdownMenu = () => {
  return (
    <ul className="dropdown-menu">
      <li className="dropdown-item">
        <User className="icon" />
        Profile
      </li>
      <li className="dropdown-item">
        <Bell className="icon" />
        Notifications
      </li>
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
  );
};

export default DropdownMenu;
