import React from "react";
import { Link } from "react-router-dom";
import Grid from "@mui/material/Grid";
const LoginBottom = () => {
  return (
    <Grid container>
      <Grid item>
        <p>
          Don't have an account?{" "}
          <Link to={"/signup"} sx={{ color: "#A700D0", cursor: "pointer" }}>
            Sign up
          </Link>
        </p>
      </Grid>
    </Grid>
  );
};

export default LoginBottom;
