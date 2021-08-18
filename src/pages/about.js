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
              </p>

              <p>A little of history about me...</p>

              <p>
                I was born in Argentina, but I have lived in Chile for most of
                my life. I studied business engineering and after a short time
                working, I travel to Australia on a working holiday visa. During
                my time in Australia I met my wife, where we lived in Melbourne
                for two years.
              </p>

              <p>
                I am currently living in Leigh on Sea, England. Hoping to obtain
                an entry-level position at a great company to be a hard-working
                asset to any team, to learn, grow and develop long-term.
              </p>
              <p>I hold a valid settlement visa, no sponsorship is required.</p>
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
