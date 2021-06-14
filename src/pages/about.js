import React from "react"
import styled from "styled-components"
import Title from "../components/Title"
import Layout from "../components/Layout"
import AboutImg from "../components/AboutImg"
import Seo from "../components/Seo"

const AboutPage = () => {
  return (
    <Layout>
      <Seo title="About" />
      <Container className="about-page">
        <div className="section section-center">
          <Title title="About Me" />
          <div className=" about-center">
            <AboutImg />

            <article className="about-text">
              <p className="text-1">
                Hi there!
                <span role="img" aria-label="hi">
                  👋🏽
                </span>
                Welcome to my online portfolio.
              </p>
              <p>
                My name is Jorge Mena. I love to learn. I am always wanting to
                learn new things that will help me grow professionally.
              </p>
              <p>A little of history about me...</p>

              <p>
                I was born in Argentina, but I have lived in Chile for most of
                my life. I studied business engineering and after a short time
                working, I travel to Australia on a working holiday visa. While
                i was in Australia I met my wife. We lived in Australia for two
                years.
              </p>
              <p>
                In 2021 while I was living in England with my wife, I decided to
                make a have a change of career and started studying programming.
                Specifically Frontend Developing.
              </p>
              <p>I'm currently living in Leigh on Sea, England.</p>

              <p>
                I am keen to develop my skills within a professional role. I am
                looking to obtain a role within a fast paced and progressive
                environment; that will develop my Frontend knowledge and further
                benefit myself and an organisation.
              </p>
            </article>
          </div>
        </div>
      </Container>
    </Layout>
  )
}

const Container = styled.section`
  .about-center {
    display: flex;
    justify-content: space-around;
    align-items: center;
    flex-wrap: wrap;
  }

  .about-img-wrapper {
    height: 25rem;
  }

  .about-img {
    height: 100%;
  }

  .about-text {
    max-width: 600px;
    color: var(--grey-600);
    align-self: center;
    margin-top: 70px;
  }

  .text-1 {
    font-size: 1.3rem;
  }
`

export default AboutPage
