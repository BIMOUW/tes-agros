import React from "react";
import { Link } from "react-router-dom";
import Agros_Logo from "../../assets/logo-agros.png";
import Home_Logo from "../../assets/Dashboard-Home.png";
import History_Logo from "../../assets/Dashboard-History.png";
import Notification_Logo from "../../assets/DashboardNotification.png";
import Messenger_Logo from "../../assets/Dashboard-Messenger.png";
import "./style.css";

export const Navbar = () => {
  return (
    <div style={{ backgroundColor: "#FFFFFF", position: "relative" }}>
      <div className="Navbar">
        <div>
          <Link to="/">
            <img
              src={Agros_Logo}
              alt="Agros_Logo"
              style={{ width: 168, height: 33 }}
            />
          </Link>
        </div>
        <div className="Navbar-Item">
          <div className="item">
            <img src={Home_Logo} alt="Home_Logo" />
          </div>
          <div className="item">
            <img src={History_Logo} alt="History_Logo" />
          </div>
          <div className="item">
            <img src={Messenger_Logo} alt="Messenger_Logo" />
          </div>
          <div className="item">
            <img src={Notification_Logo} alt="Notification_Logo" />
          </div>
          <div className="User">
            <button className="item-User">
              <p className="text-user">Admin 1 : Pramono</p>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
