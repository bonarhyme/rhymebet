import React from "react";
import UserDashboardNav from "../components/dashboards/UserDashboardNav";
import PromoNotice from "../components/subscriptions/PromoNotice";

const UserDashboard = () => {
  return (
    <main className="register ">
      <PromoNotice />
      <UserDashboardNav />
    </main>
  );
};

export default UserDashboard;
