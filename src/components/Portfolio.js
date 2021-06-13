import React from "react"
import styled from "styled-components"
import Title from "./Title"
import ProjectCard from "./ProjectCard"

const Portfolio = () => {
  return (
    <Wrapper className="section bg-grey">
      <Title title="Portfolio" />
      <div className="portfolio-underline"> </div>
      <ProjectCard />
    </Wrapper>
  )
}

const Wrapper = styled.section`
  height: 100%;
`

export default Portfolio
