import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import AboutImg from "./AboutImg"

const About = () => {
  return (
    <Wrapper className="section">
      <div className="section-center about-center">
        <AboutImg page />

        <article className="about-info">
          <div className="about-title">
            <h2>about</h2>
            <div className="underline"></div>
          </div>
          <p className="mt-0">
            Hi there!
            <span role="img" aria-label="hi">
              👋🏽
            </span>
            , Welcome to my online portfolio.
          </p>
          <p>
            My name is Jorge Mena, I am a self-driven, motivated business
            engineer from Chile.
          </p>

          <p>
            In 2021 I found my passion for front-end development. I currently
            write front-end cod. as a freelancer.
          </p>
          <Link to="/about" className="btn">
            about me
          </Link>
        </article>
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.section`
  .about-center {
    display: grid;
    gap: 3rem 2rem;
  }

  .about-info {
    p {
      color: var(--grey-600);
    }
  }
  @media screen and (min-width: 992px) {
    .about-center {
      grid-template-columns: 1fr 1fr;
    }

    .about-info {
      align-self: center;
    }
  }

  .about-title {
    margin-bottom: 4rem;
    text-align: left;
    p {
      color: var(--grey-600);
    }
    .underline {
      width: 5rem;
      height: 0.25rem;
      background: var(--primary-500);
    }
  }
`

export default About
