import React from "react"
import styled from "styled-components"
import Layout from "../components/Layout"
import ContactForm from "../components/Form/ContactForm"
import Seo from "../components/Seo"

const Reservation = () => {
  return (
    <Layout>
      <Seo title="Contact" />
      <Container>
        <div className="section section-center">
          <section className="contact-page">
            <ContactForm />
          </section>
        </div>
      </Container>
    </Layout>
  )
}

export default Reservation

const Container = styled.section`
  background: var(--grey-100);

  .contact-title {
    h2 {
      font-size: 1.441rem;
    }
  }

  .contact-page {
    display: grid;
    place-items: center;
  }

  @media (min-width: 772px) {
    h2 {
      font-size: 2.441rem;
    }
  }
`
