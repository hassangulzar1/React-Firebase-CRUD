import React from "react";
import { Link } from "react-router-dom";
import Grid from "@mui/material/Grid";
const SignUpBottom = () => {
  return (
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
  );
};

export default SignUpBottom;
