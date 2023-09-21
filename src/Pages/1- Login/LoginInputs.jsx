import React, { Fragment } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

const LoginInputs = (props) => {
  return (
    <Fragment>
      <TextField
        error={props.email.emailInputIsValid}
        helperText={
          props.email.emailInputIsValid ? "Must Included (@gmail.com)" : ""
        }
        margin="normal"
        required
        fullWidth
        id="email"
        label="Enter Your Email"
        name="email"
        autoComplete="email"
        onChange={props.email.emailChangeHandler}
        onBlur={props.email.emailBlurHandler}
        value={props.email.enteredEmail}
      />
      <TextField
        error={props.password.passwordInputIsValid}
        helperText={
          props.password.passwordInputIsValid
            ? "Password must be 7 characters long"
            : ""
        }
        margin="normal"
        required
        fullWidth
        name="password"
        label="Enter Your Password"
        type="password"
        id="password"
        autoComplete="current-password"
        onChange={props.password.passwordChangeHandler}
        onBlur={props.password.passwordBlurHandler}
        value={props.password.enteredPassword}
      />
      <Button
        type="submit"
        fullWidth
        variant="contained"
        disabled={!props.formIsValid}
        sx={{
          mt: 3,
          mb: 2,
          backgroundColor: "#A700D0",
          "&:hover": {
            backgroundColor: "rgba(124, 40, 116, 1)",
          },
        }}
      >
        {props.isLoading ? "Loading..." : "sign in"}
      </Button>
    </Fragment>
  );
};

export default LoginInputs;
