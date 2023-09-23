import React, { useContext } from "react";
import { TextField } from "@mui/material";
import useInput from "../hooks/use-input";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import authContext from "../context/authContext";
import { getFirestore } from "firebase/firestore/lite";
import { app } from "../firebase-config";
const ModalInputs = () => {
  const ctx = useContext(authContext);
  //! Inputs States
  const {
    enteredValue: enteredId,
    isValid: idIsValid,
    inputChangeHandler: idChangeHanlder,
    onBlurHandler: idBlurHandler,
    hasError: idInputIsValid,
    reset: resetId,
  } = useInput((value) => value.length == 4);
  const {
    enteredValue: enteredName,
    isValid: nameIsValid,
    inputChangeHandler: nameChangeHandler,
    onBlurHandler: nameBlurHanlder,
    hasError: nameInputIsValid,
    reset: resetName,
  } = useInput((value) => value.trim() !== "");

  const {
    enteredValue: enteredEmail,
    isValid: emailIsValid,
    inputChangeHandler: emailChangeHandler,
    onBlurHandler: emailBlurHandler,
    hasError: emailInputIsValid,
    reset: emailReset,
  } = useInput((value) => value.includes("@gmail.com"));
  const {
    enteredValue: enteredSallary,
    isValid: sallaryIsValid,
    inputChangeHandler: sallaryChangeHandler,
    onBlurHandler: sallaryBlurHandler,
    hasError: sallaryInputIsValid,
    reset: sallaryReset,
  } = useInput((value) => value.trim() !== "");
  const {
    enteredValue: enteredDate,
    isValid: dateIsValid,
    inputChangeHandler: DateChangeHandler,
    onBlurHandler: DateBlurHandler,
    hasError: dateInputIsValid,
    reset: DateReset,
  } = useInput((value) => value.trim() !== "");
  let formIsValid = false;
  if (
    idIsValid &&
    nameIsValid &&
    emailIsValid &&
    sallaryIsValid &&
    dateIsValid
  ) {
    formIsValid = true;
  }

  // Submit Handler
  let db = getFirestore(app);

  const AddUserSubmitHandler = (event) => {
    event.preventDefault();
  };
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        padding: "0 50px",
        flexDirection: "column",
      }}
    >
      <form action="" onSubmit={AddUserSubmitHandler}>
        <TextField
          fullWidth
          sx={{ marginY: 1 }}
          type="number"
          label="Unique Id"
          value={enteredId}
          onChange={idChangeHanlder}
          onBlur={idBlurHandler}
          error={idInputIsValid}
          helperText={
            idInputIsValid ? "Please enter a valid Id (4 digits)" : ""
          }
        />
        <TextField
          fullWidth
          sx={{ marginY: 1 }}
          type="text"
          label="User Name"
          value={enteredName}
          onChange={nameChangeHandler}
          onBlur={nameBlurHanlder}
          error={nameInputIsValid}
          helperText={nameInputIsValid ? "Please enter a valid User Name" : ""}
        />
        <TextField
          fullWidth
          sx={{ marginY: 1 }}
          type="text"
          label="Email"
          onChange={emailChangeHandler}
          onBlur={emailBlurHandler}
          error={emailInputIsValid}
          value={enteredEmail}
          helperText={
            emailInputIsValid ? "Please enter a valid email (@gmail.com)" : ""
          }
        />
        <TextField
          fullWidth
          sx={{ marginY: 1 }}
          type="number"
          label="sallary ($)"
          value={enteredSallary}
          onChange={sallaryChangeHandler}
          onBlur={sallaryBlurHandler}
          error={sallaryInputIsValid}
          helperText={sallaryInputIsValid ? "Please enter a valid Sallary" : ""}
        />
        <TextField
          fullWidth
          sx={{ marginY: 1 }}
          type="date"
          value={enteredDate}
          onChange={DateChangeHandler}
          onBlur={DateBlurHandler}
          error={dateInputIsValid}
          helperText={dateInputIsValid ? "Please enter a valid Date" : ""}
        />
        <Stack
          direction="row"
          spacing={2}
          sx={{ display: "flex", justifyContent: "center", marginTop: 2 }}
        >
          <Button
            variant="contained"
            color="success"
            type="submit"
            disabled={!formIsValid}
          >
            Add User
          </Button>
          <Button
            variant="outlined"
            color="error"
            onClick={() => ctx.modalStateHandler(false)}
          >
            Close
          </Button>
        </Stack>
      </form>
    </div>
  );
};

export default ModalInputs;
