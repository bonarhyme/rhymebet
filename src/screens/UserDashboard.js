import React from "react";
import { Helmet } from "react-helmet";
import UserDashboardNav from "../components/dashboards/UserDashboardNav";
import PromoNotice from "../components/subscriptions/PromoNotice";

const UserDashboard = () => {
  return (
    <main className="register ">
      <Helmet>
        <title>User's Dashboard - Rhymebet</title>
        <meta name="description" content="User's Dashboard" />
      </Helmet>
      <PromoNotice />
      <UserDashboardNav />
    </main>
  );
};

export default UserDashboard;
