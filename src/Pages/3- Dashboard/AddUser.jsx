import React from "react";
import { Button } from "@mui/material";
import classes from "./AddUser.module.css";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
const AddUser = () => {
  return (
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
          marginBottom: 2,
        }}
      >
        <AddCircleOutlineIcon sx={{ marginRight: 1 }} />
        ADD NEW USER
      </Button>
    </div>
  );
};

export default AddUser;
