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

  return {
    enteredValue,
    isValid,
    hasError,
    inputChangeHandler,
    onBlurHandler,
  };
};

export default useInput;
