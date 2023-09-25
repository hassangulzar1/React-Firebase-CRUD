import React from "react";
import classes from "./Navbar.module.css";
import logo from "../../assets/logo.png";
import { Avatar } from "@mui/material";
import Button from "@mui/material/Button";
import { auth } from "../../firebase-config";
import { signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const Navbar = () => {
  let userData = JSON.parse(localStorage.getItem("userData"));
  //!SignOut Handler
  const navigate = useNavigate();
  const signOutHanlder = () => {
    localStorage.removeItem("rememberMe");
    localStorage.removeItem("userData");
    signOut(auth)
      .then(() => {
        toast.success("logout Successfully!");
        navigate("/");
      })
      .catch((err) => toast.error(err));
  };

  // styles
  const signOutStyles = {
    textDecoration: "underline",
    border: "none",
    background: "white",
    cursor: "pointer",
    fontFamily: "Montserrat, sans-serif",
    fontWeight: "bold",
    color: "#A700D0",
    margin: 0,
    padding: 0,
    "&:hover": {
      color: "gray",
      background: "white",
    },
  };
  return (
    <div className={classes.navbar}>
      <div className={classes.logo}>
        <img src={logo} alt="Logo" />
      </div>
      <div className={classes["sign-out"]}>
        <Avatar sx={{ bgcolor: "#A700D0" }}>
          {userData.name.slice(0, 1).toUpperCase()}
        </Avatar>
        <div style={{ margin: "0 10px" }}>
          <p style={{ fontFamily: "Montserrat, sans-serif", margin: "2px 0" }}>
            {userData.name}
          </p>
          <Button onClick={signOutHanlder} sx={signOutStyles}>
            SIGN OUT
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
