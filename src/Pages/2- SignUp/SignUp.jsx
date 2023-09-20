import React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import { Link } from "react-router-dom";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import PersonAddAltIcon from "@mui/icons-material/PersonAddAlt";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import CopyRight from "../../Components/Copyright";
import useInput from "../../hooks/use-input";
// import InputAdornment from "@mui/material/InputAdornment";
// import Visibility from "@mui/icons-material/Visibility";
// import VisibilityOff from "@mui/icons-material/VisibilityOff";
// import IconButton from "@mui/material/IconButton";

const defaultTheme = createTheme();

export default function SignIn() {
  //! show hide password state
  // const [passwordShow, setPasswordShow] = useState(false);
  // const iconChangeHandler = () => {};
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

  if (emailIsValid && passwordIsValid) {
    formIsValid = true;
  }
  //! Submit Handler
  const handleSubmit = (event) => {
    event.preventDefault();
  };

  //!  Jsx Code
  return (
    <ThemeProvider theme={defaultTheme}>
      <div
        style={{
          background:
            "linear-gradient(90deg, rgba(75,124,40,1) 0%, rgba(39,47,43,1) 100%)",
          height: "100vh",
          width: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
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
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              paddingX: 3,
              paddingY: 4,
            }}
          >
            <Avatar sx={{ mb: 1, backgroundColor: "green" }}>
              <PersonAddAltIcon />
            </Avatar>
            <Typography
              sx={{
                fontFamily: "Montserrat, sans-serif",
                color: "green",
                fontWeight: "bold",
              }}
              component="h1"
              variant="h5"
            >
              SIGN UP
            </Typography>
            <Typography align="center">
              Enter your credentails to create new account
            </Typography>
            <Box
              component="form"
              onSubmit={handleSubmit}
              noValidate
              sx={{ mt: 1 }}
            >
              <TextField
                error={userNameInputIsValid}
                helperText={userNameInputIsValid ? "invalid Username" : ""}
                margin="normal"
                required
                fullWidth
                id="text"
                label="Enter Your Username"
                name="text"
                autoComplete="text"
                onChange={userNameChangeHandler}
                onBlur={userNameBlurHandler}
                value={enteredUserName}
              />
              <TextField
                error={emailInputIsValid}
                helperText={
                  emailInputIsValid ? "Must Included (@gmail.com)" : ""
                }
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
                  passwordInputIsValid
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
                  backgroundColor: "green",
                  "&:hover": {
                    backgroundColor: "green",
                  },
                }}
              >
                Register
              </Button>
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
