import React from "react"
import styled from "styled-components"
import Layout from "../components/Layout"
import ProjectCard from "../components/ProjectCard"
import Seo from "../components/Seo"
import Title from "../components/Title"

const PortfolioPage = () => {
  return (
    <Layout title="Portfolio">
      <Seo />
      <Container>
        <section className="section section-center">
          <Title title="Porfolio" />
          <ProjectCard />
        </section>
      </Container>
    </Layout>
  )
}

const Container = styled.section`
  background: var(--primary-100);
`

export default PortfolioPage
