import React, { Fragment, useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import OutlinedInput from "@mui/material/OutlinedInput";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import IconButton from "@mui/material/IconButton";
import InputAdornment from "@mui/material/InputAdornment";
import FormHelperText from "@mui/material/FormHelperText";
import Checkbox from "@mui/material/Checkbox";
import FormControlLabel from "@mui/material/FormControlLabel";

const LoginInputs = (props) => {
  const [showPassword, setShowPassword] = React.useState(false);
  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };
  return (
    <Fragment>
      <TextField
        error={props.email.emailInputIsValid}
        helperText={
          props.email.emailInputIsValid ? "Must Included (@gmail.com)" : ""
        }
        margin="normal"
        fullWidth
        id="email"
        label="Email"
        name="email"
        autoComplete="email"
        onChange={props.email.emailChangeHandler}
        onBlur={props.email.emailBlurHandler}
        value={props.email.enteredEmail}
      />
      <FormControl sx={{ marginTop: "15px" }} fullWidth variant="outlined">
        <InputLabel
          htmlFor="outlined-adornment-password"
          error={props.password.passwordInputIsValid}
        >
          Password
        </InputLabel>
        <OutlinedInput
          onChange={props.password.passwordChangeHandler}
          onBlur={props.password.passwordBlurHandler}
          value={props.password.enteredPassword}
          error={props.password.passwordInputIsValid}
          label="Password"
          type={showPassword ? "text" : "password"}
          endAdornment={
            <InputAdornment position="end">
              <IconButton
                aria-label="toggle password visibility"
                onClick={handleClickShowPassword}
                onMouseDown={handleMouseDownPassword}
                edge="end"
              >
                {showPassword ? <Visibility /> : <VisibilityOff />}
              </IconButton>
            </InputAdornment>
          }
        />
        <FormHelperText
          error={props.password.passwordInputIsValid}
          id="outlined-weight-helper-text"
        >
          {props.password.passwordInputIsValid
            ? "Password must be 7 characters long"
            : ""}
        </FormHelperText>
      </FormControl>
      <FormControlLabel
        onChange={(e) => props.checkbox(e.target.checked)}
        control={<Checkbox value="remember" color="primary" />}
        label="Remember me"
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
