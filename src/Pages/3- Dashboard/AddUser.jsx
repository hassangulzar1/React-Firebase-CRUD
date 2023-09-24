import React, { Fragment, useContext, useState } from "react";
import { Button } from "@mui/material";
import classes from "./AddUser.module.css";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import TextField from "@mui/material/TextField";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import authContext from "../../context/authContext";

const AddUser = () => {
  const ctx = useContext(authContext);
  const modalOpenerHandler = () => {
    ctx.modalStateHandler(true);
  };

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
    flexWrap: "Wrap",
  };
  return (
    //! Add Button
    <Fragment>
      {/* Add user Button  */}
      <div className={classes.mainDiv}>
        <Button
          onClick={modalOpenerHandler}
          variant="outlined"
          size="medium"
          sx={{
            color: "white",
            borderColor: "white",
            marginRight: 4,
            marginBottom: 4,
          }}
        >
          <AddCircleOutlineIcon sx={{ marginRight: 1 }} />
          ADD NEW USER
        </Button>
      </div>
      {/* Search Input  */}
      <Container maxWidth="lg">
        <Box sx={boxStyle}>
          <Box sx={{ minWidth: 180 }}>
            <FormControl fullWidth>
              <InputLabel id="demo-simple-select-label">Filter By</InputLabel>
              <Select
                id="demo-simple-select"
                value={ctx.filterBy}
                label="Filter By"
                onChange={ctx.handleChange}
              >
                <MenuItem value={"Name"}>Name</MenuItem>
                <MenuItem value={"Email"}>Email</MenuItem>
                <MenuItem value={"Id"}>Id</MenuItem>
              </Select>
            </FormControl>
          </Box>

          <TextField
            id="outlined-search"
            label="Search"
            type="search"
            onChange={(e) => ctx.setFilterInputState(e.target.value)}
          />
        </Box>
      </Container>
    </Fragment>
  );
};

export default AddUser;
