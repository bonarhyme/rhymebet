import React from "react";
import AdminUsers from "../../components/superAdmin/AdminUsers";
import RegularUsers from "../../components/superAdmin/RegularUsers";

const User = () => {
  return (
    <main>
      <h1 className="main-header">Super Admin User List</h1>
      <AdminUsers />
      <RegularUsers />
    </main>
  );
};

export default User;
