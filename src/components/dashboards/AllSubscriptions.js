import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Table } from "react-bootstrap";
import Loader from "../Loader";
import { getUserAllSub } from "../../actions/subscriptionActions";
import PaginationDashboard from "../PaginationDashboard";
import Message from "../Message";

const AllSubscriptions = () => {
  const dispatch = useDispatch();

  const pageNumber = 1;
  const [list, setList] = useState([]);
  const [page, setPage] = useState(0);
  const [pages, setPages] = useState(0);

  const { loading, serverReply, success, error } = useSelector(
    (state) => state.userAllSubGet
  );

  useEffect(() => {
    dispatch(getUserAllSub(pageNumber));
    // eslint-disable-next-line
  }, []);

  useEffect(() => {
    if (success) {
      setList(serverReply.getUserAll);
      setPage(serverReply.page);
      setPages(serverReply.pages);
    }
    // eslint-disable-next-line
  }, [dispatch, success]);

  return (
    <section>
      <h3 className="other-header">All Subscriptions</h3>
      {error && <Message variant="danger">{error}</Message>}
      {loading ? (
        <Loader />
      ) : (
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
                const { amount, plan, expiryDate, reference, paymentData } =
                  sub;
                const { currency } = paymentData;

                return (
                  <tr key={index + 1}>
                    <td>{index + 1}</td>
                    <td>{plan}</td>
                    <td>{amount}</td>
                    <td>{currency}</td>
                    <td>
                      {new Date(Number(reference)).toString().slice(0, 25)}
                    </td>
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
      )}
      <PaginationDashboard page={page} pages={pages} />
    </section>
  );
};

export default AllSubscriptions;
