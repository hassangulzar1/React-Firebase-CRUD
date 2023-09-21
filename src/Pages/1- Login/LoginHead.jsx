import React, { Fragment } from "react";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Avatar from "@mui/material/Avatar";

const LoginHead = () => {
  return (
    <Fragment>
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
    </Fragment>
  );
};

export default LoginHead;
