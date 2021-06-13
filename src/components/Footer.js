import React from "react"
import styled from "styled-components"
import SocialLinks from "../constants/SocialLinks"

const Footer = () => {
  return (
    <Container>
      <div>
        <SocialLinks styleClass="footer-icons" />
        <p className="footer-text">
          &copy;{new Date().getFullYear()} aljorgevi. All rights reserved
        </p>
      </div>
    </Container>
  )
}

const Container = styled.footer`
  height: 7rem;
  text-align: center;
  background: var(--black);
  display: grid;
  place-items: center;

  .footer-icons {
    display: flex;
    justify-content: center;
    line-height: 1;
    margin-bottom: 0.5rem;
  }
  .footer-icons a {
    font-size: 1.5rem;
    margin: 0 0.5rem;
    transition: var(--transition);
  }
  .footer-icons li {
    transition: var(--transition);
  }
  .footer-icons li:hover {
    transform: translateY(-10%);
  }
  .footer-text {
    margin-bottom: 0;
    color: var(--white);
    text-transform: uppercase;
    letter-spacing: var(--letterSpacing);
  }
`

export default Footer