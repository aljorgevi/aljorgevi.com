import React from "react"
import { FaTimes } from "react-icons/fa"
import SocialLinks from "../constants/SocialLinks"
import Links from "../constants/Links"

const Sidebar = ({ isOpen, toggleSidebar }) => {
  return (
    <aside className={isOpen ? "sidebar show-sidebar" : "sidebar"}>
      <button className="close-btn" type="button" onClick={toggleSidebar}>
        <FaTimes />
      </button>
      <div className="side-container">
        <ul className={isOpen ? "sidebar-links" : null}>
          <Links toggleSidebar={toggleSidebar} />
        </ul>
        <SocialLinks
          white
          styleClass={isOpen ? "social-links sidebar-icons" : null}
        />
      </div>
    </aside>
  )
}

export default Sidebar
