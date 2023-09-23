import React, { Fragment } from "react";
import Navbar from "./Navbar";
import AddUser from "./AddUser";
import UserTable from "./UserTable";
import Modal from "../../Components/Modal";
import { AuthContextProvider } from "../../context/authContext";
const Dashboard = () => {
  return (
    <AuthContextProvider>
      <Modal />
      <Navbar />
      <AddUser />
      <UserTable />
    </AuthContextProvider>
  );
};

export default Dashboard;
