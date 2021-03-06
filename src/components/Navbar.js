import React from "react"
import styled from "styled-components"
import { FaAlignRight, FaLinkedin, FaGithub } from "react-icons/fa"
import Links from "../constants/Links"

const Navbar = ({ toggleSidebar }) => {
  return (
    <Wrapper>
      <div className="nav-center">
        <div className="nav-header">
          <div>
            <a
              href="https://www.linkedin.com/in/jorgeamena/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin className="icon" />
            </a>
            <a
              href="https://github.com/aljorgevi"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub className="icon" />
            </a>
          </div>

          <button type="button" className="toggle-btn" onClick={toggleSidebar}>
            <FaAlignRight />
          </button>
        </div>
        <Links styleClass="nav-links" />
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.nav`
  width: 100%;
  position: sticky;
  top: 0;
  height: 3.5rem;
  display: flex;
  align-items: center;
  background: var(--primary-500);
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.5);
  z-index: 10;

  .nav-center {
    width: 97vw;
    margin: 0 auto;
  }

  .nav-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .icon {
    color: var(--white);
    font-size: 1.5rem;
    transition: var(--transition);
    margin-left: 1rem;
  }

  .toggle-btn {
    font-size: 2rem;
    background: transparent;
    border-color: transparent;
    color: var(--white);
    cursor: pointer;
    transition: var(--transition);
    &:hover {
      color: var(--primary-200);
    }
  }

  .nav-links {
    display: none;
  }

  @media screen and (min-width: 768px) {
    .toggle-btn {
      display: none;
    }
    .nav-links {
      display: flex;
      justify-content: flex-end;
    }

    .nav-links a {
      margin-right: 1.5rem;
      text-transform: capitalize;
      color: var(--white);
      font-weight: bold;
      letter-spacing: var(--letterSpacing);
      transition: var(--transition);
      padding: 0.8712rem 0;
      &:hover {
        border-bottom: 4px solid var(--white);
      }
    }

    .nav-center {
      display: grid;
      grid-template-columns: auto 1fr;
      align-items: center;
    }
  }
`

export default Navbar
