import React from "react";
import { Outlet } from "react-router-dom"
import Navbar from "../components/navBar.jsx";
import {Footer} from "../components/Footer.jsx"

function Layout() {
  return (
    <>
      <Navbar/>
      <Outlet/>
      <Footer/>
    </>
  )
}

export default Layout
