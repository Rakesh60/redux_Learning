import React from "react";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import { Outlet } from "react-router-dom";
import Sidebar from "./Components/Sidebar";

function Layout() {
  return (
    <div>
      <Header />
      <Sidebar></Sidebar>
      <Outlet></Outlet>
      <Footer />
    </div>
  );
}

export default Layout;
