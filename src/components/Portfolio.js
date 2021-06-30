import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import Title from "./Title"
import ProjectCard from "./ProjectCard"
import { graphql, useStaticQuery } from "gatsby"

const Portfolio = () => {
  const data = useStaticQuery(query)
  const featuredProjects = data.allContentfulProject.nodes

  return (
    <Wrapper className="section bg-grey">
      <Title title="Portfolio" />
      <div className="portfolio-underline"> </div>
      <ProjectCard projects={featuredProjects} />
      <Link to="/portfolio" className="center-btn">
        <button className="btn">All projects</button>
      </Link>
    </Wrapper>
  )
}

const Wrapper = styled.section`
  height: 100%;
  .center-btn {
    display: flex;
    justify-content: center;
    margin: 3rem 0;
  }
`

const query = graphql`
  {
    allContentfulProject(filter: { featured: { eq: true } }) {
      nodes {
        title
        description
        url
        id
        github
        image {
          gatsbyImageData(placeholder: BLURRED, layout: CONSTRAINED)
        }
      }
    }
  }
`

export default Portfolio
