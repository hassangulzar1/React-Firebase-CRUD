import React from "react";
import { TextField } from "@mui/material";
import useInput from "../hooks/use-input";

const ModalInputs = () => {
  const {
    enteredValue: enteredId,
    inputChangeHandler: idChangeHanlder,
    onBlurHandler: idBlurHandler,
    hasError: idInputIsValid,
    reset: resetId,
  } = useInput((value) => value.length == 4);

  const {
    enteredValue: enteredEmail,
    inputChangeHandler: emailChangeHandler,
    onBlurHandler: emailBlurHandler,
    hasError: emailInputIsValid,
    reset: emailReset,
  } = useInput((value) => value.includes("@gmail.com"));

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        padding: "0 50px",
        flexDirection: "column",
      }}
    >
      <TextField
        fullWidth
        sx={{ marginY: 1 }}
        type="number"
        label="Unique Id"
        value={enteredId}
        onChange={idChangeHanlder}
        onBlur={idBlurHandler}
        error={idInputIsValid}
        maxLength={4}
        helperText={idInputIsValid ? "Please enter a valid Id (4 digits)" : ""}
      />
      <TextField fullWidth sx={{ marginY: 1 }} type="text" label="Name" />
      <TextField
        fullWidth
        sx={{ marginY: 1 }}
        type="text"
        label="Email"
        onChange={emailChangeHandler}
        onBlur={emailBlurHandler}
        error={emailInputIsValid}
        value={enteredEmail}
        helperText={
          emailInputIsValid ? "Please enter a valid email (@gmail.com)" : ""
        }
      />
      <TextField
        fullWidth
        sx={{ marginY: 1 }}
        type="number"
        label="sallary ($)"
      />
      <TextField fullWidth sx={{ marginY: 1 }} type="text" label="Date" />
    </div>
  );
};

export default ModalInputs;
