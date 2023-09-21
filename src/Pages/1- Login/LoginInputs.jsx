import React, { Fragment } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import useInput from "../../hooks/use-input";

const LoginInputs = () => {
  const {
    enteredValue: enteredEmail,
    isValid: emailIsValid,
    inputChangeHandler: emailChangeHandler,
    onBlurHandler: emailBlurHandler,
    hasError: emailInputIsValid,
  } = useInput((value) => value.includes("@gmail.com"));

  const {
    enteredValue: enteredPassword,
    isValid: passwordIsValid,
    inputChangeHandler: passwordChangeHandler,
    onBlurHandler: passwordBlurHandler,
    hasError: passwordInputIsValid,
  } = useInput((value) => value.trim().length >= 7);

  let formIsValid = false;

  if (emailIsValid && passwordIsValid) {
    formIsValid = true;
  }

  return (
    <Fragment>
      <TextField
        error={emailInputIsValid}
        helperText={emailInputIsValid ? "Must Included (@gmail.com)" : ""}
        margin="normal"
        required
        fullWidth
        id="email"
        label="Enter Your Email"
        name="email"
        autoComplete="email"
        onChange={emailChangeHandler}
        onBlur={emailBlurHandler}
        value={enteredEmail}
      />
      <TextField
        error={passwordInputIsValid}
        helperText={
          passwordInputIsValid ? "Password must be 7 characters long" : ""
        }
        margin="normal"
        required
        fullWidth
        name="password"
        label="Enter Your Password"
        type="password"
        id="password"
        autoComplete="current-password"
        onChange={passwordChangeHandler}
        onBlur={passwordBlurHandler}
        value={enteredPassword}
      />
      <Button
        type="submit"
        fullWidth
        variant="contained"
        disabled={!formIsValid}
        sx={{
          mt: 3,
          mb: 2,
          backgroundColor: "#A700D0",
          "&:hover": {
            backgroundColor: "rgba(124, 40, 116, 1)",
          },
        }}
      >
        Sign In
      </Button>
    </Fragment>
  );
};

export default LoginInputs;
