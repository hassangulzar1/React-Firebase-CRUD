import React from "react";
import Navbar from "./Navbar";
import AddUser from "./AddUser";
import UserTable from "./UserTable";
import Modal from "../../Components/Modal";
const Dashboard = () => {
  return (
    <div>
      <Modal />
      <Navbar />
      <AddUser />
      <UserTable />
    </div>
  );
};

export default Dashboard;
