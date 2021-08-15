import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Table } from "react-bootstrap";
import Loader from "../Loader";
import { Link } from "react-router-dom";
import { getUserAllSub } from "../../actions/subscriptionActions";

const AllSubscriptions = () => {
  const dispatch = useDispatch();

  const [pageNumber, setPageNumber] = useState(1);
  const [list, setList] = useState([]);
  const [page, setPage] = useState(0);
  const [pages, setPages] = useState(0);

  const { loading, serverReply, success, error } = useSelector(
    (state) => state.userAllSubGet
  );

  useEffect(() => {
    dispatch(getUserAllSub(pageNumber));
  }, []);

  useEffect(() => {
    if (success) {
      setList(serverReply.getUserAll);
      setPage(serverReply.page);
      setPages(serverReply.pages);
    }
  }, [dispatch, success]);

  return (
    <section>
      <Table striped bordered hover responsive>
        <thead>
          <tr>
            <th>#</th>
            <th>Plan</th>
            <th>Amount</th>
            <th>Currency</th>
            <th>Sub_Date</th>
            <th>Expiry_Date</th>
          </tr>
        </thead>
        <tbody>
          {list && list.length > 0 ? (
            list.map((sub, index) => {
              const { amount, plan, expiryDate, reference, paymentData } = sub;
              const { currency } = paymentData;

              return (
                <tr key={index + 1}>
                  <td>{index + 1}</td>
                  <td>{plan}</td>
                  <td>{amount}</td>
                  <td>{currency}</td>
                  <td>{new Date(Number(reference)).toString().slice(0, 25)}</td>
                  <td>{expiryDate.slice(0, 25)}</td>
                </tr>
              );
            })
          ) : (
            <tr>
              <td>-</td>
              <td>-</td>
              <td>-</td>
              <td>-</td>
              <td>-</td>
            </tr>
          )}
        </tbody>
      </Table>
    </section>
  );
};

export default AllSubscriptions;
