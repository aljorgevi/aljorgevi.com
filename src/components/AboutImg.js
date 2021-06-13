import React from "react"
import styled from "styled-components"
import { StaticImage } from "gatsby-plugin-image"

const AboutImg = () => {
  return (
    <Container>
      <StaticImage
        src="../assets/images/about-img2.png"
        className="img hero-photo"
        alt="about img"
      />
    </Container>
  )
}

const Container = styled.article`
  justify-self: center;

  .hero-photo {
    max-width: 25rem;
    max-height: 30rem;
    border-radius: var(--borderRadius);
    position: relative;
  }
  @media screen and (min-width: 992px) {
    position: relative;
    &:before {
      content: "";
      position: absolute;
      width: 100%;
      height: 100%;
      border: 0.25rem solid var(--primary-500);
      top: 2rem;
      border-radius: var(--borderRadius);
      left: -2rem;
    }
  }
`

export default AboutImg
