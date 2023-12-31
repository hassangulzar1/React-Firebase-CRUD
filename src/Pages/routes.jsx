import React, { Fragment } from "react";
import Login from "./1- Login/Login";
import SignUp from "./2- SignUp/SignUp";
import Dashboard from "./3- Dashboard/Dashboard";
import { Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
const routes = () => {
  return (
    <Fragment>
      <ToastContainer />
      <Routes>
        <Route path="/">
          <Route index element={<Login />} />
          <Route path="signup" element={<SignUp />} />
          <Route path="dashboard" element={<Dashboard />} />
        </Route>
      </Routes>
    </Fragment>
  );
};

export default routes;
