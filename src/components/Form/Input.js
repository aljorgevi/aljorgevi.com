import React from "react"
import { faCheckCircle, faTimesCircle } from "@fortawesome/free-solid-svg-icons"
import {
  ControlGroup,
  FormControl,
  Input,
  ParagraphError,
  ValidationIcon,
} from "./Styles"

const InputComponent = ({
  state,
  setState,
  inputType,
  inputName,
  placeholder,
  errorMessage,
  regularExpression,
  className,
}) => {
  const handleChange = e => {
    setState({ ...state, field: e.target.value })
  }

  const inputHandlerValidation = () => {
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
        <Input
          className={className}
          name={inputName}
          type={inputType}
          id={inputName}
          placeholder={placeholder}
          value={state.field}
          onChange={handleChange}
          onKeyUp={inputHandlerValidation}
          onBlur={inputHandlerValidation}
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

export default InputComponent
