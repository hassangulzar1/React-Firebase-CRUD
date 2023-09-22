import React, { Fragment } from "react";
import Navbar from "./Navbar";
import AddUser from "./AddUser";
import UserTable from "./UserTable";
import Modal from "../../Components/Modal";

const Dashboard = () => {
  return (
    <Fragment>
      <Modal />
      <Navbar />
      <AddUser />
      <UserTable />
    </Fragment>
  );
};

export default Dashboard;
