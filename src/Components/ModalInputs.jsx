import React, { useContext, useEffect, useState } from "react";
import { TextField } from "@mui/material";
import useInput from "../hooks/use-input";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import authContext from "../context/authContext";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import { updateDoc } from "firebase/firestore";
import { toast } from "react-toastify";

const ModalInputs = () => {
  const ctx = useContext(authContext);
  //! Inputs States
  const [genderState, setGenderState] = useState();

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
  } = useInput((value) => value.includes("@"));
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
    nameIsValid &&
    emailIsValid &&
    sallaryIsValid &&
    dateIsValid &&
    genderState
  ) {
    formIsValid = true;
  }

  //! Submit Handler
  useEffect(() => {
    if (ctx.editingMode) {
      let particularElement = ctx.dataArray[ctx.idAndIndex.index];

      nameChangeHandler(particularElement.name);
      emailChangeHandler(particularElement.email);
      sallaryChangeHandler(particularElement.sallary);
      DateChangeHandler(particularElement.date);
      setGenderState(particularElement.gender);
    }
  }, []);

  const AddUserSubmitHandler = async (event) => {
    event.preventDefault();
    if (ctx.editingMode) {
      ctx.setLoadingState(true);
      let array = ctx.dataArray;
      array[ctx.idAndIndex.index] = {
        id: ctx.idAndIndex.id,
        name: enteredName,
        email: enteredEmail,
        gender: genderState,
        sallary: enteredSallary,
        date: enteredDate,
      };
      updateDoc(ctx.document, { arrayField: array }).then(() => {
        ctx.setDataTracking((prevState) => !prevState);
        ctx.modalStateHandler(false);
        ctx.setLoadingState(false);
        return toast.success("User Data Updated Successfully");
      });
    } else {
      ctx.sendingDataHandler({
        id: Math.random().toString(36).slice(2),
        name: enteredName,
        email: enteredEmail,
        gender: genderState,
        sallary: enteredSallary,
        date: enteredDate,
      });
      ctx.setLoadingState(false);

      setGenderState();
      resetName();
      emailReset();
      DateReset();
      sallaryReset();
      ctx.modalStateHandler(false);
    }
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
          type="text"
          label="User Name"
          value={enteredName}
          onChange={(e) => nameChangeHandler(e.target.value)}
          onBlur={nameBlurHanlder}
          error={nameInputIsValid}
          helperText={nameInputIsValid ? "Please enter a valid User Name" : ""}
        />
        <TextField
          fullWidth
          sx={{ marginY: 1 }}
          type="email"
          label="Email"
          onChange={(e) => emailChangeHandler(e.target.value)}
          onBlur={emailBlurHandler}
          error={emailInputIsValid}
          value={enteredEmail}
          helperText={emailInputIsValid ? "Please enter a valid email (@)" : ""}
        />
        <TextField
          fullWidth
          sx={{ marginY: 1 }}
          type="number"
          label="sallary ($)"
          value={enteredSallary}
          onChange={(e) => sallaryChangeHandler(e.target.value)}
          onBlur={sallaryBlurHandler}
          error={sallaryInputIsValid}
          helperText={sallaryInputIsValid ? "Please enter a valid Sallary" : ""}
        />
        <TextField
          fullWidth
          sx={{ marginY: 1 }}
          type="date"
          value={enteredDate}
          onChange={(e) => DateChangeHandler(e.target.value)}
          onBlur={DateBlurHandler}
          error={dateInputIsValid}
          helperText={dateInputIsValid ? "Please enter a valid Date" : ""}
        />
        <FormControl>
          <FormLabel id="demo-row-radio-buttons-group-label">Gender</FormLabel>
          <RadioGroup
            row
            aria-labelledby="demo-row-radio-buttons-group-label"
            name="row-radio-buttons-group"
            onChange={(e) => setGenderState(e.target.value)}
          >
            <FormControlLabel
              value="female"
              checked={genderState === "female"}
              control={<Radio />}
              label="Female"
            />
            <FormControlLabel
              value="male"
              checked={genderState === "male"}
              control={<Radio />}
              label="Male"
            />
            <FormControlLabel
              value="other"
              checked={genderState === "other"}
              control={<Radio />}
              label="other"
            />
          </RadioGroup>
        </FormControl>
        <Stack
          direction="row"
          spacing={2}
          sx={{ display: "flex", justifyContent: "center", marginTop: 2 }}
        >
          <Button
            variant="contained"
            color={ctx.editingMode ? "info" : "success"}
            type="submit"
            disabled={!formIsValid}
          >
            {ctx.editingMode
              ? ctx.loadingState
                ? "Updating..."
                : "Update"
              : "ADD USER"}
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
