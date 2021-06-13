import React, { useState } from "react"
import { navigate } from "gatsby"
import emailjs from "emailjs-com"
import styled from "styled-components"
import Input from "./Input"
import TextArea from "./TextArea"
import { WarningMessage } from "./Styles"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faExclamationTriangle } from "@fortawesome/free-solid-svg-icons"

const ContactForm = () => {
  const [user, setUser] = useState({ field: "", isValid: null })
  const [email, setEmail] = useState({ field: "", isValid: null })
  const [phone, setPhone] = useState({ field: "", isValid: null })
  const [message, setMessage] = useState({ field: "", isValid: null })
  const [formIsValid, setFormIsValid] = useState(null)
  const [isLoading, setIsLoading] = useState(false)

  const handleSubmit = e => {
    e.preventDefault()

    if (
      user.isValid === "true" &&
      phone.isValid === "true" &&
      email.isValid === "true" &&
      message.isValid === "true"
    ) {
      setFormIsValid(true)
      setUser({ field: "", isValid: null })
      setEmail({ field: "", isValid: null })
      setPhone({ field: "", isValid: null })
      setMessage({ field: "", isValid: null })
    } else {
      setFormIsValid(false)
      return
    }

    setIsLoading(true)

    const fetchData = async () => {
      try {
        await emailjs
          .sendForm(
            "service_d1wtsen",
            "template_si5u79x",
            e.target,
            "user_L0k7Rxy2vxCO7YiqDRJ5O"
          )
          .then(() => {
            setIsLoading(false)
            navigate(`/success`)
          })
      } catch (error) {
        console.log(error)
      }

      setIsLoading(false)
    }

    fetchData()
  }

  const expressions = {
    user: /^[a-zA-ZÀ-ÿ\s]{2,40}$/,
    email: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
    phone: /^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s./0-9]*$/,
    message: /^[a-zñA-Z0-9_,!.-\s]{4,1000}$/,
  }

  if (isLoading) {
    return <div className="loading"></div>
  }

  return (
    <Container>
      <article className="contact-form">
        <h3>get in touch</h3>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <Input
              className="form-control"
              state={user}
              setState={setUser}
              inputType="text"
              placeholder="Name"
              inputName="user"
              errorMessage="Alphabates only."
              regularExpression={expressions.user}
            />
            <Input
              className="form-control"
              state={email}
              setState={setEmail}
              inputType="email"
              placeholder="Email"
              inputName="email"
              errorMessage="Must be a valid email."
              regularExpression={expressions.email}
            />
            <Input
              className="form-control"
              state={phone}
              setState={setPhone}
              inputType="text"
              placeholder="+56944597968"
              inputName="phone"
              errorMessage="Length must be within 7 to 14.."
              regularExpression={expressions.phone}
              validationName="validation.phone"
            />
            <TextArea
              className="form-control"
              state={message}
              setState={setMessage}
              inputType="text"
              placeholder="Message"
              inputName="message"
              errorMessage="Must be at least 4 characters."
              regularExpression={expressions.message}
            />

            {formIsValid === false && (
              <WarningMessage
                isValid={
                  user.isValid === "true" &&
                  email.isValid === "true" &&
                  message.isValid === "true"
                }
              >
                <p className="Warning-message">
                  <FontAwesomeIcon icon={faExclamationTriangle} />
                  <b>Error:</b> Please complete all required fields.
                </p>
              </WarningMessage>
            )}
          </div>
          <button type="submit" className="btn submit-btn">
            Enviar
          </button>
        </form>
      </article>
    </Container>
  )
}

const Container = styled.div`
  z-index: 5;
  .contact-form {
    background: var(--white);
    border-radius: var(--borderRadius);
    text-align: center;
    box-shadow: var(--light-shadow);
    transition: var(--transition);
    width: 90vw;
    max-width: 35rem;
    &:hover {
      box-shadow: var(--dark-shadow);
    }

    h3 {
      padding-top: 1.25rem;
      color: var(--grey-500);
    }
  }

  .form-group {
    padding: 1rem 1.5rem;
  }

  .form-control {
    display: block;
    width: 100%;
    padding: 0.75rem 1rem;
    border: none;
    margin-bottom: 0.725rem;
    background: var(--grey-100);
    border-radius: var(--borderRadius);
    text-transform: uppercase;
    letter-spacing: var(--letterSpacing);
  }
  .form-control::placeholder {
    font-family: var(--headingFont);
    color: var(--grey-700);
    text-transform: uppercase;
    letter-spacing: var(--letterSpacing);
  }

  .submit-btn {
    display: block;
    width: 100%;
    padding: 1rem;
    border-bottom-left-radius: var(--borderRadius);
    border-bottom-right-radius: var(--borderRadius);
    border-top-right-radius: 0;
    border-top-left-radius: 0;
  }
`

export default ContactForm
