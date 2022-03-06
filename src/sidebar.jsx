import React, { useContext } from "react";
import "../src/style.css";
import { MainContext } from "./contexts/MainContext";
import { Link, NavLink } from "react-router-dom";

const Sidebar = () => {
  var li_items = document.querySelectorAll(".side_bar_bottom ul li");

  li_items.forEach(function (li) {
    li.addEventListener("click", function () {
      li_items.forEach(function (li) {
        li.classList.remove("active");
      });

      li.classList.add("active");
    });
  });
  const { showMenu, setShowMenu } = useContext(MainContext);
  return (
    <>
      <div className="side_bar" style={showMenu ? {} : { zIndex: 1000 }}>
        <div className="side_bar_top">
          <div className="profile_pic">
            <img src="../src/images/clock.jpg" alt="profile" />
          </div>
          <div className="profile_info">
            <h3>TIME MANAGER</h3>
          </div>
        </div>
        <div className="side_bar_bottom">
          <ul>
            <NavLink
              className={({ isActive }) => {
                return isActive ? "active" : "";
              }}
              to="/clock"
            >
              <li
                onClick={() => {
                  setShowMenu(true);
                }}
              >
                <span className="top_curve"></span>
                <p>
                  <span className="icon">
                    <i className="fa fa-clock"></i>
                  </span>
                  <span className="item">CLOCK</span>
                </p>
                <span className="bottom_curve"></span>
              </li>
            </NavLink>

            <NavLink
              className={({ isActive }) => {
                return isActive ? "active" : "";
              }}
              to="/stopwatch"
            >
              <li
                onClick={() => {
                  setShowMenu(true);
                }}
              >
                <span className="top_curve"></span>
                <p>
                  <span className="icon">
                    <i className="fa fa-stopwatch"></i>
                  </span>
                  <span className="item">STOP WATCH</span>
                </p>
                <span className="bottom_curve"></span>
              </li>
            </NavLink>

            <NavLink
              className={({ isActive }) => {
                return isActive ? "active" : "";
              }}
              to="/todo"
            >
              <li
                onClick={() => {
                  setShowMenu(true);
                }}
              >
                <span className="top_curve"></span>
                <p>
                  <span className="icon">
                    <i className="fa fa-clipboard-list"></i>
                  </span>
                  <span className="item">TODO</span>
                </p>
                <span className="bottom_curve"></span>
              </li>
            </NavLink>

            <NavLink
              className={({ isActive }) => {
                return isActive ? "active" : "";
              }}
              to="/weather"
            >
              <li
                onClick={() => {
                  setShowMenu(true);
                }}
              >
                <span className="top_curve"></span>
                <p>
                  <span className="icon">
                    <i className="fas fa-cloud"></i>
                  </span>
                  <span className="item">Weather</span>
                </p>
                <span className="bottom_curve"></span>
              </li>
            </NavLink>

            <NavLink
              className={({ isActive }) => {
                return isActive ? "active" : "";
              }}
              to="/author"
            >
              <li
                onClick={() => {
                  setShowMenu(true);
                }}
              >
                <span className="top_curve"></span>
                <p>
                  <span className="icon">
                    <i className="fa fa-at"></i>
                  </span>
                  <span className="item">Author</span>
                </p>
                <span className="bottom_curve"></span>
              </li>
            </NavLink>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
