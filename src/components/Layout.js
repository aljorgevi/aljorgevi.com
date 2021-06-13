import React, { useState } from "react"
import "normalize.css"
import Navbar from "./Navbar"
import Sidebar from "./Sidebar"
import Footer from "./Footer"

const Layout = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false)

  const toggleSidebar = () => {
    setIsOpen(!isOpen)
  }

  return (
    <React.Fragment>
      <Navbar toggleSidebar={toggleSidebar} primary />
      <Sidebar isOpen={isOpen} toggleSidebar={toggleSidebar} />
      <main>{children}</main>
      <Footer />
    </React.Fragment>
  )
}

export default Layout
