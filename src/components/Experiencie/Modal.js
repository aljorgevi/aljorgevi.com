import React from "react"
import styled from "styled-components"
import { FaTimes } from "react-icons/fa"

const Modal = ({ open, handleClose }) => {
  return (
    <div className={`${open ? "modal-overlay show-modal" : "modal-overlay"}`}>
      <Wrapper>
        <Container className="modal-container">
          <div className="modal-header">
            <h1>Jorge Andrés Mena Cárcamo</h1>
            <h6>Leigh on sea, Essex | jormencar@yahoo.com</h6>
            <p>
              Junior Full-Stack JavaScript Developer and Business Engineer. A
              creative professional with a keen eye for modern web design.
            </p>
          </div>
          <div className="modal-body">
            <h3>Highlights and strengths</h3>
            <article>
              <ul>
                <li>
                  Strong knowledge of HTML, CSS and Javascript current standards
                  and cross browser compatibility.
                </li>
                <li>
                  Front-end experience with responsive design, CSS3, SASS and
                  Bootstrap.
                </li>
                <li>
                  Back-end experience with Node.js, Express,
                  Authorization/Authentication and RESTful APIs.
                </li>
                <li>
                  Identified web-based user interactions and developed
                  highly-responsive user interface components via React concepts
                </li>
                <li>
                  Translated designs & wireframes into high-quality code and
                  wrote application interface code via JavaScript following
                  React.js workflows
                </li>
                <li>
                  Creative graphic and UI design skills with Photoshop and
                  Figma.
                </li>
                <li>Efficient workflow management with npm, Gulp and Sass."</li>
                <li>
                  Relational and nonrelational database administration using
                  MongoDB, Firebase and SQL.
                </li>
                <li>
                  Positive attitude, strong work ethic, out-of-the-box thinking
                  and high level of professional integrity.
                </li>
                <li>Bilingual in both English & Spanish.</li>
              </ul>
            </article>
            <h3>Experience</h3>
            <article>
              <h4>
                Front End Developer | Pseit Informatica | Puerto Montt, Chile |
                2021 - Present
              </h4>
              <ul>
                <li>
                  Determined the structure and design of web pages based on user
                  requirements and balanced functional & aesthetic designs
                </li>

                <li>
                  Created features to enhance the user experiece while ensuring
                  that the web design is optimized for smartphones
                </li>

                <li>
                  Managed brand consistency throughout the design and maintained
                  & improved the company's website by adding more features and
                  functionality.
                </li>
              </ul>
              <h4>
                Full-Stack Javascript Developer | Freelancer | Chile-UK | 2021 -
                Present
              </h4>
              <ul>
                <li>
                  Employed a variety of languages such as HTML, CSS and
                  JavaScript with React to create user-friendly web pages
                </li>
              </ul>

              <h4>
                Loki Rent a car | Co-Founder | Puerto Montt, Chile| 2018 - 2021
              </h4>
              <ul>
                <li>
                  Participated in all aspects of business development from
                  market research and finance to operations and marketing. Key
                  responsibilities included the company’s social media and web
                  development, ensuring that the company's vision was followed.
                </li>
                <li>
                  Cofounding the company’s start-up. Focusing on the development
                  of an easy way to rent a car for both locals and
                  internationals. Being the first point of call in the business
                  when dealing with foreign customers due to speaking both
                  English & Spanish fluently.
                </li>
                <li>
                  Formulated the company's vision, goals, and objectives. In
                  charge of hiring and training new employees.
                </li>
              </ul>

              <h4>
                Ditutti | Sales Administrator / Community Manager | Puerto
                Montt, Chile | 2015 - 2017
              </h4>
              <ul>
                <li>
                  Developed a full-scale sales operation from the ground up.
                  Duties included establishing database systems, recruitment of
                  employees and developing sales and marketing strategies.
                </li>
                <li>
                  Implementing strategic goals for marketing campaigns, serving
                  as project manager and leading a team of creative and
                  technical staff.
                </li>
                <li>
                  Strategising with senior management to market new products and
                  consumer goods into traditional retail channels and
                  distribution in the developing market.
                </li>
                <li>
                  Successfully expanding the marketing reach of older products
                  into emerging digital and online platforms. In charge of all
                  social media management and development.
                </li>
              </ul>
            </article>
            <h3>Education</h3>
            <article>
              <h4>
                Full-Stack JavaScript Developer | E-learning | Platzi, & Others
                | 2021
              </h4>
              <h4>
                Degree in Business Engineering| Universidad Austral de Chile |
                Puerto Montt, Chile | 2015
              </h4>
            </article>
            <h3>Publications</h3>
            <article>
              <cite>
                Identification and assessment of the economic impact of
                recreational fishing in Palena City regarding its
                sustainability. Universidad Austral de Chile, Puerto Montt,
                Chile, 2012
              </cite>
            </article>
            <br />
          </div>
          <button className="close-modal-btn" onClick={handleClose}>
            <FaTimes></FaTimes>
          </button>
        </Container>
      </Wrapper>
    </div>
  )
}

const Wrapper = styled.div`
  border-radius: var(--borderRadius);
  margin-top: 100px;
  margin-bottom: 50px;
  overflow-x: hidden;
  overflow-y: auto;
  height: 100%;
  overflow: -moz-scrollbars-none;
  scrollbar-width: none;
  -ms-overflow-style: none;
  &::-webkit-scrollbar {
    width: 0 !important;
  }
  &::-webkit-scrollbar {
    display: none;
  }
`

const Container = styled.div`
  box-shadow: 0 3px 9px rgb(0 0 0 / 50%);
  h3,
  p {
    font-size: 11pt;
  }
  .modal-header {
    padding: 0.5rem;
    background: #4b4c4d;
    color: var(--white);
    width: 100%;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    h1 {
      font-family: var(--bodyFont);
      padding-top: 5%;
      font-size: 24pt;
      font-weight: 700;
    }
    h6 {
      font-size: 9pt;
      margin-top: 10px;
      margin-bottom: 10px;
    }
    p {
      font-size: 11pt;
    }
  }

  .modal-body {
    text-align: left;
    font-family: "Open Sans";
    h3 {
      width: 100%;
      background-color: var(--primary-500);
      color: var(--white);
      font-weight: bold;
      padding: 1%;
    }
    article {
      padding: 0 5%;
    }
    ul {
      padding-left: 5%;
    }

    h4 {
      font-weight: 700;
      font-size: 10pt;
      margin-top: 10px;
      margin-bottom: 10px;
    }
    li {
      color: var(--grey-600);
      text-align: justify;
      list-style-type: circle;
      line-height: 1.42857;
    }
    cite {
      font-size: 14px;
    }
  }

  @media screen and (min-width: 1280px) {
    .modal-body {
      h4 {
        font-size: 12pt;
      }
    }
  }
`

export default Modal
