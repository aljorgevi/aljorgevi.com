import React from "react"
import {
  FaLinkedin,
  FaGithub,
  FaTwitterSquare,
  FaInstagram,
} from "react-icons/fa"

const SocialLinks = ({ styleClass, white }) => {
  return (
    <ul className={styleClass}>
      <li>
        <a href="www.linkedin.com/in/jorgeamena">
          <FaLinkedin className="social-icon linkedin-icon" />
        </a>
      </li>
      <li>
        <a href="https://github.com/aljorgevi">
          <FaGithub className="social-icon github-icon" />
        </a>
      </li>
      <li>
        <a href="https://twitter.com/aljorgevi">
          <FaTwitterSquare className="social-icon twitter-icon" />
        </a>
      </li>
      <li>
        <a href="https://www.instagram.com/aljorgevi/">
          <FaInstagram className="social-icon instagram-icon" />
        </a>
      </li>
    </ul>
  )
}
export default SocialLinks
