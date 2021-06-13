import styled, { css } from "styled-components"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

const colores = {
  borde: "#0075FF",
  error: "#bb2929",
  exito: "#1ed12d",
}

export const ParagraphError = styled.p`
  margin-top: -27px;
  margin-bottom: 0.5rem;
  font-size: 12px;
  color: ${colores.error};
  display: none;

  ${props =>
    props.isValid === "true" &&
    css`
      display: none;
    `}

  ${props =>
    props.isValid === "false" &&
    css`
      display: inherit;
    `}
`

export const ValidationIcon = styled(FontAwesomeIcon)`
  position: absolute;
  right: 10px;
  bottom: 26px;
  z-index: 100;
  font-size: 16px;
  opacity: 0;

  ${props =>
    props.isValid === "false" &&
    css`
      opacity: 1;
      color: var(--red-dark);
    `}

  ${props =>
    props.isValid === "true" &&
    css`
      opacity: 1;
      color: ${colores.exito};
    `}
`

export const Label = styled.label`
  display: block;
  font-weight: bold;
  margin-bottom: 0.5rem;
  cursor: pointer;

  ${props =>
    props.isValid === "false" &&
    css`
      color: ${colores.error};
    `}
`

export const Input = styled.input`
  width: 100%;
  background: #fff;
  border-radius: 3px;
  height: 40px;
  line-height: 40px;
  transition: 0.3s ease all;
  border: 1px solid #ccc;
  &:focus {
    border: 3px solid ${colores.borde};
    outline: 0px !important;
    -webkit-appearance: none;
    box-shadow: 3px 0px 30px rgba(163, 163, 163, 0.4);
  }
  &:active {
    opacity: 0.8;
    border: 1px solid #ccc;
  }
  ${props =>
    props.isValid === "true" &&
    css`
      border: 1px solid #ccc;
    `}

  ${props =>
    props.isValid === "false" &&
    css`
      border: 3px solid ${colores.error} !important;
    `}

    ${props =>
    props.id === "message" &&
    css`
      height: 120px;
    `}
`

export const TextAreaInput = styled.textarea`
  border: 1px solid #ccc;
  min-height: 100px;
  color: black;
  background-color: transparent;
  box-shadow: none;
  cursor: pointer;
  resize: none;
  width: 100%;
  outline: none;
  &::-webkit-input-placeholder {
    color: rgba(255, 255, 255, 0.568);
    opacity: 0.9;
  }
  ${props =>
    props.isValid === "true" &&
    css`
      border: 1px solid #ccc;
    `}

  ${props =>
    props.isValid === "false" &&
    css`
      border: 3px solid ${colores.error} !important;
    `}

    ${props =>
    props.id === "message" &&
    css`
      height: 120px;
    `}
`

export const ControlGroup = styled.div`
  display: flex;
  column-gap: 1rem;
  flex-wrap: wrap;
  flex-direction: column;
  width: 100%;
`

export const FormControl = styled.div`
  min-width: 15rem;
  flex: 1;
  margin-bottom: 1rem;
  position: relative;
  z-index: 90;
`

export const WarningMessage = styled.div`
  line-height: 45px;
  background: #f66060;
  padding: 0px 15px;
  border-radius: 3px;
  grid-column: span 2;
  p {
    margin: 0;
  }
  b {
    margin-left: 10px;
  }

  ${props =>
    props.isValid &&
    css`
      display: none;
    `}
`
