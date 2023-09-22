import React from "react";
import classes from "./Navbar.module.css";
import logo from "../../assets/logo.png";
import { Avatar } from "@mui/material";
import { Link } from "react-router-dom";
import authContext from "../../context/authContext";
const Navbar = () => {
  const ctx = React.useContext(authContext);

  return (
    <div className={classes.navbar}>
      <div className={classes.logo}>
        <img src={logo} alt="Logo" />
      </div>
      <div className={classes["sign-out"]}>
        <Avatar sx={{ bgcolor: "#A700D0" }}>
          {ctx.loginUserName.slice(0, 1).toUpperCase()}
        </Avatar>
        <div style={{ margin: "0 10px" }}>
          <p style={{ fontFamily: "Montserrat, sans-serif", margin: "2px 0" }}>
            {ctx.loginUserName}
          </p>
          <Link
            style={{
              textDecoration: "underline",
            }}
          >
            SIGN OUT
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
