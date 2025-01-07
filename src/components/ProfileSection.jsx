import React, { useState } from 'react';
import DropdownMenu from './DropdownMenu';
import './ProfileSection.css';

const ProfileSection = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => setDropdownOpen(!dropdownOpen);

  return (
    <div className="profile-section">
      {/* Profile Image and Name */}
      <div className="profile-header" onClick={toggleDropdown}>
        <img src="/profile.png" alt="Profile" className="profile-image" />
        <span className="profile-name">Evan Yates</span>
      </div>

      {/* Dropdown Menu */}
      {dropdownOpen && <DropdownMenu />}
    </div>
  );
};

export default ProfileSection;
