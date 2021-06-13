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
                Hi there!{" "}
                <span role="img" aria-label="hi">
                  👋🏽
                </span>
                Welcome to my online portfolio.
              </p>
              <p>
                First off, introductions. My name is Jorge Mena and I love to
                learn new things.
              </p>
              <p>A little of history about me...</p>

              <p>
                I was born in Argentina, but lived in Chile almost all my life.
                I studied businesses engineering and after a short time working,
                I travel to Australia with a working holiday visa. While i was
                in Australia i meet my wife. I Lived in Australia for two years.
              </p>
              <p>
                In 2021 while i was in England decided to make a big turnaround
                and study programming, precisely Frontend Developer, wherewith
                my acknowledgement of business I've got a powerful mix of tools.
              </p>
              <p>I'm currently living en Leight on Sea, England.</p>

              <p>
                I am keen to develop my learnt skills within a professional
                field. Looking to obtain a role within a fast paced and
                progressive environment; that will develop my Frontend knowledge
                and further benefit an organisation.
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
