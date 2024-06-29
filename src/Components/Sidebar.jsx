import React from "react";
import { Link } from "react-router-dom";
import "./sidebar.css";
function Sidebar() {
  return (
    <div
      style={{
        minHeight: "500px",
        width: "25%",
        border: "black 2px solid",
        textAlign: "center",
        backgroundColor: "lavender",
      }}
    >
      Sidebar
      <div className="list">
        <ul>
          <li>
            <Link to="/">Profile</Link>
          </li>
          <li>
            {" "}
            <Link to="/about">About</Link>
          </li>
          <li>
            {" "}
            <Link to="/contact">Conctact</Link>
          </li>
          <li>
            {" "}
            <Link to="/signup">Sign-Up</Link>
          </li>
        </ul>
      </div>
      <Link to="/about/userprofile">userProfile</Link>
    </div>
  );
}

export default Sidebar;
