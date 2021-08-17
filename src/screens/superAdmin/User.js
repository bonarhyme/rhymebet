import React from "react";

import AdminUsers from "../../components/superAdmin/AdminUsers";
import SuperAdminUsers from "../../components/superAdmin/SuperAdmins";
import RegularUsers from "../../components/superAdmin/RegularUsers";

const User = () => {
  return (
    <main className="px-1">
      <h1 className="main-header">Super Admin User List</h1>
      <SuperAdminUsers />
      <AdminUsers />
      <RegularUsers />
    </main>
  );
};

export default User;
