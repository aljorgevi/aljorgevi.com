import React from "react"
import { faCheckCircle, faTimesCircle } from "@fortawesome/free-solid-svg-icons"
import {
  ParagraphError,
  ValidationIcon,
  TextAreaInput,
  ControlGroup,
  FormControl,
} from "./Styles"

export default function TextArea({
  state,
  setState,
  inputType,
  inputName,
  placeholder,
  errorMessage,
  regularExpression,
  className,
}) {
  const textAreahandleChange = e => {
    setState({ ...state, field: e.target.value })
  }

  const textAreaHandlerValidation = () => {
    if (regularExpression) {
      if (regularExpression.test(state.field)) {
        setState({ ...state, isValid: "true" })
      } else {
        setState({ ...state, isValid: "false" })
      }
    }
  }

  return (
    <ControlGroup>
      <FormControl>
        <TextAreaInput
          className={className}
          name={inputName}
          rows="2"
          type={inputType}
          id={inputName}
          placeholder={placeholder}
          value={state.field}
          onChange={textAreahandleChange}
          onKeyUp={textAreaHandlerValidation}
          onBlur={textAreaHandlerValidation}
          isValid={state.isValid}
        />
        <ValidationIcon
          icon={state.isValid === "true" ? faCheckCircle : faTimesCircle}
          isValid={state.isValid}
        />
      </FormControl>
      <ParagraphError isValid={state.isValid}>{errorMessage}</ParagraphError>
    </ControlGroup>
  )
}
