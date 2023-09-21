import React, { Fragment, useState } from "react";
import { Button } from "@mui/material";
import classes from "./AddUser.module.css";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";

const options = ["Name", "Email"];
const AddUser = () => {
  const [value, setValue] = useState(options[0]);
  const [inputValue, setInputValue] = useState("");
  //! Css Sx Styles
  const boxStyle = {
    bgcolor: "white",
    height: "5rem",
    position: "relative",
    bottom: 25,
    boxShadow: 3,
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center",
    borderRadius: "12px",
  };
  return (
    //! Add Button
    <Fragment>
      {/* Add user Button  */}
      <div className={classes.mainDiv}>
        <Button
          variant="outlined"
          size="medium"
          sx={{
            color: "white",
            borderColor: "white",
            position: "fixed",
            right: "0",
            marginRight: 4,
            marginBottom: 5,
          }}
        >
          <AddCircleOutlineIcon sx={{ marginRight: 1 }} />
          ADD NEW USER
        </Button>
      </div>
      {/* Search Input  */}
      <Container maxWidth="lg">
        <Box sx={boxStyle}>
          <div sx={{ marginStart: 2 }}>
            <Autocomplete
              value={value}
              onChange={(event, newValue) => {
                setValue(newValue);
              }}
              inputValue={inputValue}
              onInputChange={(event, newInputValue) => {
                setInputValue(newInputValue);
              }}
              id="controllable-states-demo"
              options={options}
              sx={{ width: 300 }}
              renderInput={(params) => (
                <TextField {...params} label="Search By" />
              )}
            />
          </div>
          <TextField id="outlined-search" label="Search" type="search" />
        </Box>
      </Container>
    </Fragment>
  );
};

export default AddUser;
