import React, { useEffect, useState } from "react";

import { Table } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { FaCheck, FaTimes } from "react-icons/fa";

import Loader from "../Loader";
import { getAllSub } from "../../actions/subscriptionActions";
import PaginateAll from "../PaginationAll";

const GetAllSub = () => {
  const dispatch = useDispatch();

  const [list, setList] = useState([]);
  const [page, setPage] = useState(0);
  const [pages, setPages] = useState(0);

  const { loading, success, serverReply } = useSelector(
    (state) => state.allSubget
  );

  useEffect(() => {
    dispatch(getAllSub());
    // eslint-disable-next-line
  }, []);

  useEffect(() => {
    if (success) {
      setList(serverReply.getAll);
      setPages(serverReply.pages);
      setPage(serverReply.page);
    }
    // eslint-disable-next-line
  }, [success]);

  return loading ? (
    <Loader />
  ) : (
    <div className="mx-3">
      <h2 className="main-header">All Subscriptions</h2>
      <Table striped bordered hover responsive>
        <thead>
          <tr>
            <th>#</th>
            <th title="Subscription Username">Username</th>
            <th title="Subscription">Active</th>
            <th title="Subscription Plan">Plan</th>
            <th title="Subscription Amount">Amount</th>
            <th title="Subscription Currency">Currency</th>
            <th title="Subscription Date">Start</th>
            <th title="Subscription Expiry">Expiry</th>
          </tr>
        </thead>
        <tbody>
          {list.map((sub, index) => {
            const { amount, createdAt, expiryDate, plan } = sub;
            const { username } = sub.user;
            const { currency } = sub.paymentData;

            return (
              <tr key={index + 1}>
                <td>{index + 1}</td>
                <td>{username}</td>
                <td>
                  {" "}
                  {new Date(expiryDate).getTime() < Date.now() ? (
                    <FaTimes color="red" />
                  ) : (
                    <FaCheck color="green" />
                  )}
                </td>
                <td>{plan}</td>
                <td>{amount}</td>
                <td>{currency}</td>
                <td>{new Date(createdAt).toString().slice(0, 25)}</td>
                <td>{expiryDate.toString().slice(0, 25)}</td>
              </tr>
            );
          })}
        </tbody>
      </Table>
      <PaginateAll page={page} pages={pages} />
    </div>
  );
};

export default GetAllSub;
