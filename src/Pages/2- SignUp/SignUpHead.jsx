import React, { Fragment } from "react";
import PersonAddAltIcon from "@mui/icons-material/PersonAddAlt";
import Typography from "@mui/material/Typography";
import Avatar from "@mui/material/Avatar";

const SignUpHead = () => {
  return (
    <Fragment>
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
    </Fragment>
  );
};

export default SignUpHead;
