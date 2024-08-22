import React from "react";
import { BsBell, BsSearch, BsQuestionCircle } from "react-icons/bs";
import "./Header.css";
const Header = () => {
  return (
    <header className="header">
      <div className="header-left">
        <div className="search-icon">
          <BsSearch />
        </div>

        <div>
          <input type="text" placeholder="Search..." className="search-bar" />
        </div>
      </div>
      <div className="header-right">
        <div className="icon-container">
          <i className="fa fa-bell">
            <BsBell />
          </i>{" "}
          {/* Notification icon */}
        </div>
        <div className="icon-container">
          <i className="fa fa-question-circle">
            {" "}
            <BsQuestionCircle />{" "}
          </i>{" "}
          {/* Help icon */}
        </div>
        <div className="user-info">
          <div className="user-name">
            <img
              src="https://via.placeholder.com/30"
              alt="User Avatar"
              className="avatar"
            />
          </div>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <span>Admin Name</span>
            <span className="user-role">Staff</span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
