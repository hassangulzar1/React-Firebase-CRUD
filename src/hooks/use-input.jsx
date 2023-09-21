import React, { useState } from "react";

const useInput = (inputValue) => {
  const [enteredValue, setEnteredValue] = useState("");
  const [onBlur, setOnBlur] = useState(false);

  const isValid = inputValue(enteredValue);
  const hasError = !isValid && onBlur;

  const inputChangeHandler = (event) => {
    setEnteredValue(event.target.value);
  };

  const onBlurHandler = () => {
    setOnBlur(true);
  };
  const reset = () => {
    setEnteredValue("");
    setOnBlur(false);
  };
  return {
    enteredValue,
    isValid,
    hasError,
    inputChangeHandler,
    onBlurHandler,
    reset,
  };
};

export default useInput;
