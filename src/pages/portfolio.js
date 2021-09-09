import { graphql } from "gatsby"
import React, { useState } from "react"
import styled from "styled-components"
import Layout from "../components/Layout"
import ProjectCard from "../components/ProjectCard"
import Seo from "../components/Seo"
import Title from "../components/Title"

const PortfolioPage = ({ data }) => {
  const {
    allContentfulProject: { nodes: allProjects },
  } = data

  const allCategories = ["all", ...new Set(allProjects.map(c => c.category))]

  const [projects, setProjects] = useState(allProjects)

  const filterItems = category => {
    if (category === "all") {
      setProjects(allProjects)
      return
    }
    const filteredProjects = allProjects.filter(p => p.category === category)
    setProjects(filteredProjects)
  }

  return (
    <Layout>
      <Seo />
      <Container>
        <section className="section section-center">
          <Title title="Projects" />
          <div className="filter">
            <label htmlFor="select">Filter by category </label>
            {/* eslint-disable-next-line */}
            <select id="select" onChange={e => filterItems(e.target.value)}>
              {allCategories.map(category => {
                return (
                  <option key={category} value={category}>
                    {category}
                  </option>
                )
              })}
            </select>
          </div>
          <ProjectCard projectsList={projects} />
        </section>
      </Container>
    </Layout>
  )
}

const Container = styled.section`
  background: var(--primary-100);

  .filter {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    margin-bottom: 3rem;
    margin-top: -1rem;
    font-size: 1.2rem;
    color: var(--grey-600);

    & label {
    }

    & select {
      margin-top: 1rem;
      width: 150px;
      text-transform: uppercase;
    }
  }
`

export const query = graphql`
  {
    allContentfulProject(sort: { fields: featured, order: DESC }) {
      nodes {
        title
        description
        url
        id
        github
        featured
        category
        image {
          gatsbyImageData(placeholder: BLURRED, layout: CONSTRAINED)
        }
      }
    }
  }
`

export default PortfolioPage
