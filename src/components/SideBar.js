import React from "react";
import "./SideBar.css";
import { BsFillFilePersonFill, BsGrid, BsHospital } from "react-icons/bs";

import { TbGraph, TbLogin2 } from "react-icons/tb";

const SideBar = () => {
  return (
    <aside id="sidebar">
      <div className="sidebar-title">
        <div className="logo-header">
          <div className="logo-circle">
            <div className="logo-text">TT</div>
          </div>
          <div className="logo-title">
            <h1>
              BHARA<span className="red">T</span>
              <span className="green">T</span>DM
            </h1>
            <span>Tele-Diagnostic Machine</span>
          </div>
        </div>
      </div>
      <ul className="sidebar-list">
        <li className="sidebar-list-item">
          <a href="">
            <BsGrid className="icon" /> Dashboard
          </a>
        </li>

        <li className="sidebar-list-item">
          <a href="">
            <BsFillFilePersonFill className="icon" /> TDM
          </a>
        </li>

        <li className="sidebar-list-item">
          <a href="">
            <BsFillFilePersonFill className="icon" /> TDM locations
          </a>
        </li>
        <li className="sidebar-list-item">
          <a href="">
            <BsFillFilePersonFill className="icon" /> TDM locations
          </a>
        </li>

        <li className="sidebar-list-item">
          <a href="">
            <TbGraph className="icon" /> Revenue Management
          </a>
        </li>
      </ul>

      <button className="logout-button">
        <TbLogin2 className="logout" />{" "}
        <span style={{ fontWeight: "10px" }}>Log Out </span>
      </button>
    </aside>
  );
};

export default SideBar;
