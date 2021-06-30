import { graphql } from "gatsby"
import React from "react"
import styled from "styled-components"
import Layout from "../components/Layout"
import ProjectCard from "../components/ProjectCard"
import Seo from "../components/Seo"
import Title from "../components/Title"

const PortfolioPage = ({ data }) => {
  const {
    allContentfulProject: { nodes: allProjects },
  } = data

  return (
    <Layout title="Portfolio">
      <Seo />
      <Container>
        <section className="section section-center">
          <Title title="Porfolio" />
          <ProjectCard projects={allProjects} />
        </section>
      </Container>
    </Layout>
  )
}

const Container = styled.section`
  background: var(--primary-100);
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
        image {
          gatsbyImageData(placeholder: BLURRED, layout: CONSTRAINED)
        }
      }
    }
  }
`

export default PortfolioPage
