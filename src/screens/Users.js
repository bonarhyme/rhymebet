import React, { useEffect, useRef, useState } from "react";
import { Table } from "react-bootstrap";
import { FaCheck, FaTimes } from "react-icons/fa";
import { useSelector, useDispatch } from "react-redux";

import { getAllUsers } from "../actions/adminActions";
import Message from "../components/Message";
import Loader from "../components/Loader";
import PaginateAll from "../components/PaginationAll";

const Users = () => {
  const dispatch = useDispatch();

  const pageNumber = 1;
  const [list, setList] = useState([]);

  const [page, setPage] = useState(0);
  const [pages, setPages] = useState(0);

  const { loading, success, serverReply, error } = useSelector(
    (state) => state.usersAllGet
  );

  useEffect(() => {
    dispatch(getAllUsers(pageNumber));
    // eslint-disable-next-line
  }, []);

  useEffect(() => {
    if (success) {
      setList(serverReply.allUsers);
      setPages(serverReply.pages);
      setPage(serverReply.page);
    }
    // eslint-disable-next-line
  }, [success]);

  const focusDiv = useRef(null);

  useEffect(() => {
    focusDiv.current.focus();
  }, []);
  return (
    <main>
      <h1 className="main-header">Users List</h1>
      <div className="px-3">
        {error && <Message variant="danger">{error}</Message>}
        {loading ? (
          <Loader />
        ) : (
          <Table striped bordered hover responsive>
            <thead>
              <tr ref={focusDiv} tabIndex="-1">
                <th>#</th>
                <th>Name</th>
                <th>Username</th>
                <th>Email</th>
                <th>Ref_count</th>
                <th>Sub_Active</th>
                <th>Subscription</th>
                <th>Subs_Expire</th>
                <th>Subs_Count</th>
                <th>Promo_Active</th>
                <th>Verified</th>
                <th>Admin</th>
              </tr>
            </thead>
            <tbody>
              {list.length > 0 &&
                list.map((user, index) => {
                  const {
                    name,
                    username,
                    email,
                    isAdmin,
                    subCount,
                    isVerified,
                    referral,
                    activeSub,
                    activePromo,
                  } = user;

                  const { active, plan, expiryDateLiteral } = activeSub;

                  const { active: promoActive } = activePromo;

                  return (
                    <tr key={index + 1}>
                      <td>{index + 1}</td>
                      <td>{name ? name : "-"}</td>
                      <td>{username ? username : "-"}</td>
                      <td>{email ? email : "-"}</td>
                      <td>{referral ? referral : "-"}</td>
                      <td>
                        {active ? (
                          <FaCheck color="#17991d" />
                        ) : (
                          <FaTimes color="#f02c2c" />
                        )}
                      </td>
                      <td>{plan ? plan : "-"}</td>
                      <td>
                        {expiryDateLiteral
                          ? expiryDateLiteral.slice(0, 25)
                          : "-"}
                      </td>
                      <td>{subCount}</td>
                      <td>
                        {promoActive ? (
                          <FaCheck color="#17991d" />
                        ) : (
                          <FaTimes color="#f02c2c" />
                        )}
                      </td>
                      <td>
                        {isVerified ? (
                          <FaCheck color="#17991d" />
                        ) : (
                          <FaTimes color="#f02c2c" />
                        )}
                      </td>
                      <td>
                        {isAdmin ? (
                          <FaCheck color="#17991d" />
                        ) : (
                          <FaTimes color="#f02c2c" />
                        )}
                      </td>
                    </tr>
                  );
                })}
            </tbody>
          </Table>
        )}
      </div>
      <PaginateAll page={page} pages={pages} users={true} />
    </main>
  );
};

export default Users;
