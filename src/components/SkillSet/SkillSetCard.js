import React, { useState } from "react"
import styled from "styled-components"
import Tooltip from "../UI/Tooltip"
import testData from "./data"

const SkillSetCard = () => {
  // eslint-disable-next-line
  const [data, setData] = useState(testData)
  return (
    <Wrapper>
      {data.map(item => (
        <div key={item.title} className="grid">
          <Tooltip content={item.title} direction="top">
            <img src={item.image} alt={item.title} />
          </Tooltip>
        </div>
      ))}
    </Wrapper>
  )
}

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  justify-items: center;

  .grid {
    margin: 9px 2px;
  }
  img {
    transition: var(--transition);
    height: 90px;
    border-radius: 20px;
    box-shadow: var(--shadow-2);
    &:hover {
      cursor: context-menu;
      transform: scale(1.06);
      box-shadow: var(--shadow-4);
    }
    @media (min-width: 419px) {
      height: 100px;
    }
  }

  @media (min-width: 1170px) {
    grid-template-columns: 1fr 1fr 1fr 1fr;
  }
`

export default SkillSetCard
