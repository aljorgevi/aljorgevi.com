import React from "react"
import styled from "styled-components"

const Title = ({ title, subtitle }) => {
  return (
    <Wrapper>
      <h2>{title || "default title"}</h2>
      {subtitle && <p className="subtitle-title">{subtitle}</p>}
      <Underline></Underline>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  margin-bottom: 4rem;
  text-align: center;

  .subtitle-title {
    margin-left: auto;
    margin-right: auto;
    margin-top: -21px;
    font-size: 14px;
    color: var(--grey-400);
  }
`

const Underline = styled.div`
  width: 5rem;
  height: 0.25rem;
  margin-bottom: 1.25rem;
  background: var(--primary-500);
  margin-left: auto;
  margin-right: auto;
`
export default Title
