import React from "react";
import Navbar from "./Navbar";
import AddUser from "./AddUser";
import UserTable from "./UserTable";
const Dashboard = () => {
  return (
    <div>
      <Navbar />
      <AddUser />
      <UserTable />
    </div>
  );
};

export default Dashboard;
