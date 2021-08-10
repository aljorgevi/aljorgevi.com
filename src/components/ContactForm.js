import React from "react"
import { navigate } from "gatsby"
import { useForm } from "react-hook-form"
import styled from "styled-components"

const ContactForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm()

  const encode = data => {
    return Object.keys(data)
      .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
      .join("&")
  }

  const onSubmit = (values, event) => {
    event.preventDefault()

    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({ "form-name": "aljorgevi", ...values }),
    })
      .then(() => {
        navigate("/success/")
        reset()
      })
      .catch(error => {
        console.log(error)
      })
  }

  return (
    <Container>
      <article className="contact-form">
        <h3>Get In Touch</h3>
        <form
          onSubmit={handleSubmit(onSubmit)}
          data-netlify="true"
          name="aljorgevi"
          method="POST"
          action="/success"
          netlify-honeypot="bot-field"
        >
          <input type="hidden" name="bot-field" />
          <input type="hidden" name="form-name" value="aljorgevi" />
          <div className="form-group">
            <input
              className="form-control"
              type="text"
              placeholder="name"
              name="user"
              {...register("user", { required: true })}
            />
            {errors.user && <p className="error">Complete this field</p>}
            <input
              className="form-control"
              type="email"
              placeholder="email"
              name="email"
              {...register("email", { required: true })}
            />
            {errors.email && <p className="error">Complete this field</p>}
            <input
              className="form-control"
              type="text"
              placeholder="Phone"
              name="phone"
              {...register("phone")}
            />

            <textarea
              className="form-control"
              type="text"
              placeholder="Message"
              name="message"
              {...register("message", { required: true })}
            />
            {errors.message && <p className="error">Complete this field</p>}
          </div>

          <button className="btn submit-btn">Submit</button>
        </form>
      </article>
    </Container>
  )
}

const Container = styled.div`
  z-index: 2;
  margin-top: -50px;
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
    line-height: 40px;
    height: 40px;
    display: block;
    width: 100%;
    padding: 0.75rem 1rem;
    border: 1px solid #ccc;
    margin-bottom: 0.725rem;
    background: var(--grey-100);
    border-radius: var(--borderRadius);
    text-transform: uppercase;
    letter-spacing: var(--letterSpacing);
    &:focus {
      border: 3px solid #0075ff;
      outline: 0px !important;
      -webkit-appearance: none;
      box-shadow: 3px 0px 30px rgba(163, 163, 163, 0.4);
    }
    &:active {
      opacity: 0.8;
      border: 1px solid #ccc;
    }
  }
  .form-control::placeholder {
    font-family: var(--headingFont);
    color: var(--grey-600);
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

  textarea {
    min-height: 200px;
  }

  .error {
    text-align: left;
    margin-top: -8px;
    margin-bottom: 0.5rem;
    font-size: 12px;
    color: #bb2929;
  }
`

export default ContactForm
