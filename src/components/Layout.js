import React, { useState } from "react"
import { motion } from "framer-motion"
import { pageAnimation3 } from "../utils/animations"
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
      <motion.main
        variants={pageAnimation3}
        initial="hidden"
        animate="show"
        exit="exit"
      >
        {children}
      </motion.main>
      <Footer />
    </React.Fragment>
  )
}

export default Layout
