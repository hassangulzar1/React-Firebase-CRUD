import React from "react";
import classes from "./Navbar.module.css";
import logo from "../../assets/logo.png";
import { Avatar } from "@mui/material";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className={classes.navbar}>
      <div className={classes.logo}>
        <img src={logo} alt="Logo" />
      </div>
      <div className={classes["sign-out"]}>
        <Avatar sx={{ bgcolor: "#A700D0" }}>{"N"}</Avatar>
        <div style={{ margin: "0 10px" }}>
          <p style={{ fontFamily: "Montserrat, sans-serif", margin: "2px 0" }}>
            User Name
          </p>
          <Link>SIGN OUT</Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
