import React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import CopyRight from "../../Components/Copyright";
import LoginHead from "./LoginHead";
import LoginInputs from "./LoginInputs";
import LoginBottom from "./LoginBottom";
import useInput from "../../hooks/use-input";
const defaultTheme = createTheme();

export default function SignIn() {
  //! State Management by using Custom hooks
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
  //! Submit Handler
  const handleSubmit = (event) => {
    event.preventDefault();
  };

  //! Css Classes Objects
  const parentDiv = {
    background:
      "linear-gradient(90deg, rgba(124,40,116,1) 0%, rgba(74,52,70,1) 100%)",
    height: "100vh",
    width: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
  };
  const inputBox = {
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
          <Box sx={inputBox}>
            {/* Login Heade Component */}
            <LoginHead />
            <Box component="form" onSubmit={handleSubmit} sx={{ mt: 1 }}>
              {/* Login Inputs  */}
              <LoginInputs
                email={{
                  enteredEmail,
                  emailChangeHandler,
                  emailBlurHandler,
                  emailInputIsValid,
                  emailIsValid,
                }}
                password={{
                  enteredPassword,
                  passwordChangeHandler,
                  passwordBlurHandler,
                  passwordInputIsValid,
                  passwordIsValid,
                }}
                formIsValid={formIsValid}
              />
              <LoginBottom />
            </Box>
          </Box>
        </Container>
        <CopyRight sx={{ mt: 4, mb: 2, color: "#ccc" }} />
      </div>
    </ThemeProvider>
  );
}
