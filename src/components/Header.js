import React from "react"
import styled from "styled-components"
import { StaticImage } from "gatsby-plugin-image"

const Header = () => {
  return (
    <Wrapper>
      <StaticImage
        className="img"
        src="../assets/images/aljorgevi.jpg"
        layout="fullWidth"
        alt="image"
        placeholder="blurred"
      />
      <div className="info"></div>
      <article>
        <h1>Jorge Andrés Mena</h1>
        <h3>Full-stack Developer</h3>
      </article>
    </Wrapper>
  )
}

const Wrapper = styled.header`
  position: relative;
  height: 50vh;
  .img {
    height: 100%;
  }
  .info {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: grid;
    place-items: center;
    background: linear-gradient(
      to right,
      rgba(39, 39, 39, 0.9),
      rgba(39, 39, 39, 0.3)
    );
  }
  article {
    position: absolute;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    top: 70%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 85vw;
    max-width: 800px;
    color: var(--white);
    text-align: center;

    h1 {
      font-weight: 500;
      line-height: 1.25;
      margin-bottom: 0.5rem;
      letter-spacing: 3px;
      font-size: 1.453rem;
      animation: slideFromRight 4s ease-in-out 1;
      text-transform: uppercase;
    }
    h3 {
      font-weight: 400;
      font-size: 1.253rem;
      animation: slideFromLeft 4s ease-in-out 1;
      text-transform: uppercase;
    }
  }
  .logo {
    margin-top: 10rem;
    height: 4rem;
    animation: show 4s linear 1;
  }

  @media screen and (min-width: 992px) {
    height: 70vh;
    article {
      h1 {
        font-size: 2.052rem;
      }
      h3 {
        font-size: 1.441rem;
      }
      .logo {
        margin-top: 10rem;
        height: 4rem;
      }
    }
  }

  @media (min-width: 1400px) {
    article {
      h1 {
        font-size: 3.052rem;
      }
      h3 {
        font-size: 2.441rem;
      }
      .logo {
        margin-top: 10rem;
        height: 5rem;
      }
    }
  }
`

export default Header
