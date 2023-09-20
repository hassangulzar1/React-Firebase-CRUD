import React, { useState } from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import CopyRight from "../../Components/Copyright";

const defaultTheme = createTheme();

export default function SignIn() {
  //! State Management
  const [enteredValue, setEnteredValue] = useState("");
  const [onBlur, setOnBlur] = useState(false);

  const isValid = enteredValue.includes("@");
  const formIsValid = !isValid && onBlur;

  //! Submit Handler
  const handleSubmit = (event) => {
    event.preventDefault();
  };

  const inputChangeHandler = (event) => {
    setEnteredValue(event.target.value);
  };

  const onBlurHandler = () => {
    setOnBlur(true);
  };

  //!  Jsx Code
  return (
    <ThemeProvider theme={defaultTheme}>
      <div
        style={{
          background:
            "linear-gradient(90deg, rgba(124,40,116,1) 0%, rgba(74,52,70,1) 100%)",
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
            <Avatar sx={{ mb: 1, bgcolor: "secondary.main" }}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography
              sx={{
                fontFamily: "Montserrat, sans-serif",
                color: "#A700D0",
                fontWeight: "bold",
              }}
              component="h1"
              variant="h5"
            >
              SIGN IN
            </Typography>
            <Typography align="center">
              Enter your credentails to access your account
            </Typography>
            <Box
              component="form"
              onSubmit={handleSubmit}
              noValidate
              sx={{ mt: 1 }}
            >
              <TextField
                error={formIsValid}
                helperText={formIsValid ? "incorrect Entry" : ""}
                margin="normal"
                required
                fullWidth
                id="email"
                label="Enter Your Email"
                name="email"
                autoComplete="email"
                onChange={inputChangeHandler}
                onBlur={onBlurHandler}
                value={enteredValue}
              />
              <TextField
                margin="normal"
                required
                fullWidth
                name="password"
                label="Enter Your Password"
                type="password"
                id="password"
                autoComplete="current-password"
              />
              <Button
                type="submit"
                fullWidth
                variant="contained"
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
              <Grid container>
                <Grid item>
                  <p>
                    Don't have an account?{" "}
                    <Link sx={{ color: "#A700D0", cursor: "pointer" }}>
                      Sign up
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
