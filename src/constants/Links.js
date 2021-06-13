import React from "react"
import { Link } from "gatsby"

const Links = ({ styleClass, toggleSidebar }) => {
  return (
    <ul className={styleClass}>
      <li>
        <Link to="/" className="page-link" onClick={toggleSidebar}>
          Home
        </Link>
      </li>
      <li>
        <Link to="/portfolio" className="page-link" onClick={toggleSidebar}>
          Portfolio
        </Link>
      </li>
      <li>
        <Link to="/about" className="page-link" onClick={toggleSidebar}>
          About
        </Link>
      </li>
      <li>
        <Link to="/contact" className="page-link" onClick={toggleSidebar}>
          Contact
        </Link>
      </li>
    </ul>
  )
}

export default Links
