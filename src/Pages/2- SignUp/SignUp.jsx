import React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import { Link } from "react-router-dom";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import CopyRight from "../../Components/Copyright";
import useInput from "../../hooks/use-input";
import SignUpHead from "./SignUpHead";
import SignUpInput from "./SignUpInput";

const defaultTheme = createTheme();

export default function SignIn() {
  //! State Management by using Custom hooks
  const {
    enteredValue: enteredUserName,
    isValid: userNameIsValid,
    inputChangeHandler: userNameChangeHandler,
    onBlurHandler: userNameBlurHandler,
    hasError: userNameInputIsValid,
  } = useInput((value) => value.trim() !== "");

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

  if (emailIsValid && passwordIsValid && userNameIsValid) {
    formIsValid = true;
  }
  //! Submit Handler
  const handleSubmit = (event) => {
    event.preventDefault();
  };

  //! css Classes
  const parentDiv = {
    background:
      "linear-gradient(90deg, rgba(75,124,40,1) 0%, rgba(39,47,43,1) 100%)",
    height: "100vh",
    width: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
  };
  const boxStyling = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    paddingX: 3,
    paddingY: 4,
  };

  //!  Jsx Code
  return (
    <ThemeProvider theme={defaultTheme}>
      <div style={parentDiv}>
        <Container
          component="main"
          maxWidth="xs"
          ty
          sx={{
            backgroundColor: "white",
            borderRadius: "20px",
          }}
        >
          <CssBaseline />
          <Box sx={boxStyling}>
            <SignUpHead />
            <Box component="form" onSubmit={handleSubmit} sx={{ mt: 1 }}>
              <SignUpInput
                userName={{
                  enteredUserName,
                  userNameChangeHandler,
                  userNameBlurHandler,
                  userNameIsValid,
                  userNameInputIsValid,
                }}
                email={{
                  enteredEmail,
                  emailChangeHandler,
                  emailBlurHandler,
                  emailIsValid,
                  emailInputIsValid,
                }}
                password={{
                  passwordInputIsValid,
                  passwordChangeHandler,
                  passwordBlurHandler,
                  passwordIsValid,
                  passwordInputIsValid,
                }}
                formIsValid={formIsValid}
              />
              <Grid container>
                <Grid item>
                  <p>
                    Already have account?{" "}
                    <Link to={"/"} style={{ color: "green" }}>
                      Log in
                    </Link>
                  </p>
                </Grid>
              </Grid>
            </Box>
          </Box>
        </Container>
        <CopyRight sx={{ mt: 4, mb: 2, color: "#ccc" }} />
      </div>
    </ThemeProvider>
  );
}
