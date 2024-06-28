import React from "react";
import { Outlet } from "react-router-dom";

function About() {
  return (
    <div
      style={{
        textAlign: "center",
        fontSize: "2rem",
        backgroundColor: "teal",
        position: "absolute",
        right: "20%",
        top: "12%",
        minHeight: "500px",
        minWidth: "700px",
      }}
    >
      About
      <Outlet></Outlet>
    </div>
  );
}

export default About;
