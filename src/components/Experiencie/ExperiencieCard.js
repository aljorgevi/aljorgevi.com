import React, { Fragment, useState, useEffect } from "react"
import styled from "styled-components"
import testData from "./data.json"
import Modal from "./Modal"

const ExperiencieCard = () => {
  // eslint-disable-next-line
  const [data, setData] = useState(testData)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const body = document.querySelector("body")
    body.style.overflow = open ? "hidden" : "auto"
  }, [open])

  const handleOpen = () => {
    setOpen(true)
  }
  const handleClose = () => {
    setOpen(false)
  }

  return (
    <Fragment>
      <Modal open={open} handleClose={handleClose} />
      <Container>
        {data.map(item => (
          <div key={item.title} className="job-card">
            <img
              onClick={() => {
                handleOpen()
              }}
              src={`/${item.image}`}
              alt={item.alt}
              className="job-img"
              aria-hidden="true"
            />

            <h5 className="job-title">{item.title}</h5>
          </div>
        ))}
      </Container>
    </Fragment>
  )
}

const Container = styled.article`
  align-items: center;
  justify-content: center;
  flex-direction: column;
  display: flex;
  flex-wrap: wrap;
  margin: 0 auto;

  .job-card {
    margin-bottom: 1rem;
  }

  .job-img {
    background: var(--primary-500);
    border-radius: 20px;
    width: 150px;
    padding: 0.3rem;
    transition: 0.4s ease-in-out all;
    box-shadow: var(--shadow-1);
    &:hover {
      border-radius: 0rem;
      cursor: pointer;
    }
  }

  h5 {
    text-align: center;
    margin-top: 1rem;
    font-size: 14px;
    letter-spacing: 0.2rem;
  }

  .job-title {
    display: none;
  }

  @media screen and (min-width: 576px) {
    flex-direction: row;
    justify-content: space-between;

    .job-card {
      margin-bottom: 0;
    }

    .job-title {
      display: block;
    }
  }
`

export default ExperiencieCard
