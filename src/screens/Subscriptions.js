import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Table } from "react-bootstrap";
import { FaCheck, FaTimes } from "react-icons/fa";

import { getActiveSubscriptions } from "../actions/subscriptionActions";
import Loader from "../components/Loader";
import Message from "../components/Message";
import Paginate from "../components/Pagination";

const Subscriptions = () => {
  const dispatch = useDispatch();

  const [list, setList] = useState([]);
  const [page, setPage] = useState(0);
  const [pages, setPages] = useState(0);

  const { loading, success, serverReply, error } = useSelector(
    (state) => state.subscriptionActiveGet
  );

  useEffect(() => {
    dispatch(getActiveSubscriptions());
    // eslint-disable-next-line
  }, []);

  useEffect(() => {
    if (success) {
      setList(serverReply.activeSubsUser);
      setPages(serverReply.pages);
      setPage(serverReply.page);
      console.log(serverReply);
    }
    // eslint-disable-next-line
  }, [success]);

  return (
    <main>
      <h1 className="main-header">Active Subscriptions</h1>
      {error && <Message variant="error">{error}</Message>}

      {loading ? (
        <Loader />
      ) : (
        <div className="mx-3">
          <Table striped bordered hover responsive>
            <thead>
              <tr>
                <th>#</th>
                <th title="Active Subscription User">Name</th>
                <th title="Active Subscription Username">Username</th>
                <th title="Active Subscription">Active</th>
                <th title="Subscription Plan">Plan</th>
                <th title="Subscription Amount">Amount</th>
                <th title="Subscription Currency">Currency</th>
                <th title="Subscription Duration">Duration</th>
                <th title="Subscription Date">Start</th>
                <th title="Subscription Expiry">Expiry</th>
                <th title="Subscription Count">Count</th>
              </tr>
            </thead>
            <tbody>
              {list.length > 0 &&
                list.map((sub, index) => {
                  const { name, username, subCount } = sub;
                  const {
                    active,
                    amount,
                    createdDate,
                    currency,
                    duration,
                    expiryDate,
                    plan,
                  } = sub.activeSub;
                  return (
                    <tr key={index + 1}>
                      <td>{index + 1}</td>
                      <td>{name}</td>
                      <td>{username}</td>
                      <td>
                        {active ? (
                          <FaCheck color="green" />
                        ) : (
                          <FaTimes color="red" />
                        )}
                      </td>
                      <td>{plan}</td>
                      <td>{amount}</td>
                      <td>{currency}</td>
                      <td>
                        {duration > 1 ? duration + " days" : duration + " day"}
                      </td>
                      <td>
                        {new Date(Number(createdDate)).toString().slice(0, 25)}
                      </td>
                      <td>
                        {new Date(Number(expiryDate)).toString().slice(0, 25)}
                      </td>
                      <td>{subCount}</td>
                    </tr>
                  );
                })}
            </tbody>
          </Table>
        </div>
      )}
      <Paginate isFree={null} page={page} pages={pages} />
    </main>
  );
};

export default Subscriptions;
