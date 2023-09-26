import React, { Fragment } from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import OutlinedInput from "@mui/material/OutlinedInput";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import IconButton from "@mui/material/IconButton";
import InputAdornment from "@mui/material/InputAdornment";
import FormHelperText from "@mui/material/FormHelperText";

const SignUpInput = (props) => {
  const [showPassword, setShowPassword] = React.useState(false);
  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  return (
    <Fragment>
      <TextField
        error={props.userName.userNameInputIsValid}
        helperText={
          props.userName.userNameInputIsValid ? "invalid Username" : ""
        }
        margin="normal"
        required
        fullWidth
        id="text"
        label="Enter Your Username"
        name="text"
        autoComplete="text"
        onChange={(e) => props.userName.userNameChangeHandler(e.target.value)}
        onBlur={props.userName.userNameBlurHandler}
        value={props.userName.enteredUserName}
      />

      <TextField
        error={props.email.emailInputIsValid}
        helperText={
          props.email.emailInputIsValid ? "Must Included (@gmail.com)" : ""
        }
        margin="normal"
        required
        fullWidth
        id="email"
        label="Enter Your Email"
        name="email"
        autoComplete="email"
        onChange={(e) => props.email.emailChangeHandler(e.target.value)}
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
          onChange={(e) => props.password.passwordChangeHandler(e.target.value)}
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

      <Button
        type="submit"
        loading={true}
        fullWidth
        variant="contained"
        disabled={!props.formIsValid}
        sx={{
          mt: 3,
          mb: 2,
          backgroundColor: "green",
          "&:hover": {
            backgroundColor: "green",
          },
        }}
      >
        {props.isLoading ? "Loading..." : "Register"}
      </Button>
    </Fragment>
  );
};

export default SignUpInput;
