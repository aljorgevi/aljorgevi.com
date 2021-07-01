import React from "react"
import styled from "styled-components"
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

const ProjectCard = ({ projectsList = [] }) => {
  return (
    <Wrapper className="section-center">
      {projectsList.map(item => {
        const { id, image, url, title, description, github } = item

        return (
          <article className="single-project" key={id}>
            <div className="project-container">
              <GatsbyImage
                image={getImage(image)}
                alt={title}
                className="img-wrapper"
              />
              <a
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                className="project-icon"
              >
                <FaExternalLinkAlt />
              </a>
            </div>
            <div className="project-details">
              <div className="module-text">
                <h4>{title}</h4>
                <p>{description}</p>
              </div>
            </div>
            <div className="project-footer">
              <span>
                <FaGithub />
              </span>
              <a
                href={github}
                className="github-link"
                target="_blank"
                rel="noopener noreferrer"
              >
                source code
              </a>
            </div>
          </article>
        )
      })}
    </Wrapper>
  )
}

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(298px, 1fr));

  .single-project {
    display: grid;
    grid-template-rows: auto 1fr auto;
    margin-left: -10px;
    margin-bottom: 2rem;
    background: var(--white);
    border-radius: var(--borderRadius);
    box-shadow: 0 5px 15px rgb(0 0 0 / 10%);
    transition: all 0.3s linear;
    &:hover {
      box-shadow: 0 5px 15px rgb(0 0 0 / 30%);
      transform: scale(1.02);
    }
  }
  .project-container img {
    border-top-left-radius: var(--borderRadius);
    border-top-right-radius: var(--borderRadius);
  }

  .project-container {
    position: relative;
  }
  .project-icon {
    cursor: pointer;
    position: absolute;
    font-size: 1.75rem;
    bottom: 0;
    left: 50%;
    -webkit-transform: translate(-50%, 50%);
    transform: translate(-50%, 50%);
    width: 4rem;
    height: 4rem;
    display: grid;
    place-items: center;
    border-radius: 50%;
    background: var(--primary-100);
    color: var(--primary-500);
    border: 0.395rem solid var(--white);
    &:hover {
      background: var(--primary-500);
      color: var(--primary-200);
    }
  }
  .project-details {
    h4 {
      text-align: center;
      font-size: 1.05rem;
      letter-spacing: 2px;
      font-weight: 500;
      margin-bottom: 1.25rem;
      margin-top: 1.25rem;
    }
  }
  .module-text {
    padding: 0.75rem 1rem;
    h4 {
      margin-top: 2rem;
    }
    p {
      text-align: center;
      color: var(--primary-900);
      margin-bottom: 0.5rem;
    }
  }
  .project-footer {
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: var(--primary-500);
    background: var(--primary-100);
    padding: 0.45rem 1rem;
    border-bottom-left-radius: var(--borderRadius);
    border-bottom-right-radius: var(--borderRadius);
  }
  .project-footer a {
    color: var(--primary-500);
    text-transform: capitalize;
    transition: var(--transition);
    justify-self: end;
    &:hover {
      color: var(--primary-700);
    }
  }
  .github-link {
    cursor: pointer;
  }

  @media screen and (min-width: 576px) {
    grid-template-columns: repeat(auto-fill, minmax(358px, 1fr));
    gap: 1.5rem 2.5rem;
    .single-project {
      margin-left: 15px;
      margin-bottom: 0;
    }
  }
`

export default ProjectCard
