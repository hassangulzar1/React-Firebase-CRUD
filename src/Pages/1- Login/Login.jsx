import React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import CopyRight from "../../Components/Copyright";
import LoginHead from "./LoginHead";
import LoginInputs from "./LoginInputs";
import LoginBottom from "./LoginBottom";
const defaultTheme = createTheme();

export default function SignIn() {
  //! State Management by using Custom hooks

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
            {/* Login Heade Component */}
            <LoginHead />
            <Box component="form" onSubmit={handleSubmit} sx={{ mt: 1 }}>
              <LoginInputs />
              <LoginBottom />
            </Box>
          </Box>
        </Container>
        <CopyRight sx={{ mt: 4, mb: 2, color: "#ccc" }} />
      </div>
    </ThemeProvider>
  );
}
