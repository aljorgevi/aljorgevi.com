import React from "react"
import styled from "styled-components"
import SkillSetCard from "./SkillSetCard"
import Title from "../Title"

const SkillSetSection = () => {
  return (
    <Wrapper className="section">
      <Title title="Skill Set" />

      <SkillSetCard />
    </Wrapper>
  )
}

const Wrapper = styled.section`
  background: var(--primary-100);
  width: 100vw;
  margin: 0 auto;
`

export default SkillSetSection
