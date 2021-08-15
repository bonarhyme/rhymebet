import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Table } from "react-bootstrap";
import { getUserProfile } from "../../actions/userActions";
import Loader from "../Loader";
import { FaCheck, FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";
import Notice from "../subscriptions/Notice";
import ActiveNotice from "../subscriptions/ActiveNotice";

const Overview = () => {
  const dispatch = useDispatch();

  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [activeSub, setActiveSub] = useState("");
  const [referral, setReferral] = useState(0);
  const [subCount, setSubCount] = useState(0);
  const [bonus, setBonus] = useState(false);

  const { loading, profile, success } = useSelector(
    (state) => state.userProfile
  );

  useEffect(() => {
    dispatch(getUserProfile());
  }, [dispatch]);

  useEffect(() => {
    if (success) {
      const {
        name,
        username,
        email,
        subCount,
        referral,
        activeSub,
        activePromo,
      } = profile;

      const { plan } = activeSub;
      const { active } = activePromo;

      setName(name);
      setUsername(username);
      setEmail(email);
      setSubCount(subCount);
      setReferral(referral);
      setActiveSub(plan);
      setBonus(active);
    }
  }, [profile, success]);

  return (
    <section>
      {loading ? (
        <Loader />
      ) : (
        <>
          <Table striped bordered hover responsive>
            <thead>
              <tr>
                <th>Name</th>
                <th>Username</th>
                <th>Email</th>
                <th>Active_Subscription</th>
                <th>Referral</th>
                <th>Subscription_Count</th>
                <th>Promo</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>{name}</td>
                <td>{username}</td>
                <td>{email}</td>
                <td>{activeSub ? activeSub : "-"}</td>
                <td>{referral}</td>
                <td>{subCount}</td>
                <td>
                  {bonus ? (
                    <FaCheck color="#17991d" size={35} />
                  ) : (
                    <FaTimes color="#f02c2c" />
                  )}
                </td>
                <td>
                  <button className="btn btn-info">
                    <Link
                      to="/user/profile"
                      className="color-white bold remove"
                    >
                      Edit Profile
                    </Link>
                  </button>
                </td>
              </tr>
            </tbody>
          </Table>
          <div className="py-3">
            <Notice />
            <ActiveNotice />
          </div>
        </>
      )}{" "}
    </section>
  );
};

export default Overview;
