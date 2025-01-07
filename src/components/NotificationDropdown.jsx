import React, { useEffect, useRef } from "react";
import { FaBell, FaUser, FaSyncAlt, FaInfoCircle } from "react-icons/fa"; // Importing icons
import "./NotificationDropdown.css";

const NotificationDropdown = ({ onClose }) => {
  const notificationRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        notificationRef.current &&
        !notificationRef.current.contains(event.target)
      ) {
        onClose();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [onClose]);

  // Example notifications
  const notifications = [
    { id: 1, icon: <FaBell />, message: "You created a new Firm", time: "Just now" },
    { id: 2, icon: <FaUser />, message: "New user registered", time: "59 minutes ago" },
    { id: 3, icon: <FaSyncAlt />, message: "Your subscription is renewed", time: "12 hours ago" },
    { id: 4, icon: <FaInfoCircle />, message: "New Update has been received", time: "3 days ago" },
  ];

  return (
    <div className="notification-dropdown" ref={notificationRef}>
      <ul className="dropdown-menu">
        {notifications.map((notification) => (
          <li className="dropdown-item" key={notification.id}>
            <span className="icon">{notification.icon}</span>
            <div className="content">
              <p className="message">{notification.message}</p>
              <p className="time">{notification.time}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default NotificationDropdown;
