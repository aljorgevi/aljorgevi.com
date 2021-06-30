import React from "react"
import styled from "styled-components"
import Title from "../Title"
import ExperiencieCard from "./ExperiencieCard"

const Experiencie = () => {
  return (
    <Container>
      <div className="section  project-center">
        <Title
          title="Experiencie"
          subtitle="More details on my resume, click the image below"
        />
        <ExperiencieCard />
      </div>
    </Container>
  )
}

const Container = styled.section`
  background: var(--white);
  .project-center {
    width: 90vw;
    margin: 0 auto;
    max-width: 1170px;
  }
`

export default Experiencie
