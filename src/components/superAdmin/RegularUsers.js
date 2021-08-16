import React, { useEffect, useState } from "react";
import { Table, Button, Container } from "react-bootstrap";
import { FaCheck, FaTimes } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { getRegularUsers, makeAdmin } from "../../actions/superAdminActions";
import Loader from "../Loader";
import LoaderTwo from "../LoaderTwo";
import Message from "../Message";
import PaginationDashboard from "../PaginationDashboard";

const RegularUsers = () => {
  const dispatch = useDispatch();

  const pageNumber = 1;
  const [list, setList] = useState([]);
  const [page, setPage] = useState(null);
  const [pages, setPages] = useState(null);

  const { loading, success, serverReply, error } = useSelector(
    (state) => state.regularUsersGet
  );

  const {
    loading: makeLoading,
    sucess: makeSuccess,
    serverReply: makeServerReply,
    error: makeError,
  } = useSelector((state) => state.adminMake);

  const { serverReply: adminServerReply } = useSelector(
    (state) => state.adminUsersGet
  );

  useEffect(() => {
    setList([]);
    dispatch(getRegularUsers(pageNumber));
  }, [makeSuccess, adminServerReply]);

  useEffect(() => {
    if (success) {
      setList(serverReply.allUsers);
      setPage(serverReply.page);
      setPages(serverReply.pages);
    }
  }, [dispatch, success]);

  const handleMakeAdmin = (id, name) => {
    if (window.confirm(`Are you sure you want to make ${name} an admin?`)) {
      dispatch(makeAdmin(id));
    }
  };

  return (
    <section>
      <h3 className="other-header">Regular Users</h3>
      {error && <Message variant="danger">{error}</Message>}
      {makeError && <Message variant="danger">{makeError}</Message>}
      {makeServerReply && (
        <Message variant="success">{makeServerReply.message}</Message>
      )}
      {loading ? (
        <Loader />
      ) : (
        <Container fluid>
          <Table responsive striped bordered hover>
            <thead>
              <tr>
                <th>#</th>
                <th>Name</th>
                <th>Username</th>
                <th>Email</th>
                <th>Verified</th>
                <th>Reg_Date</th>
                <th>Active_Sub</th>
                <th>Plan</th>
                <th>Sub_Expiry_Date</th>
                <th>Amount</th>
                <th>Currency</th>
                <th>Active_Promo</th>
                <th>Promo_Create_Date</th>
                <th>Promo_Expiry_Date</th>
                <th>Make_Admin</th>
              </tr>
            </thead>
            <tbody>
              {list &&
                list.length > 0 &&
                list.map((user, index) => {
                  const {
                    _id,
                    name,
                    username,
                    email,
                    isVerified,
                    isAdmin,
                    createdAt,
                    activeSub,
                    activePromo,
                  } = user;

                  const { active, plan, expiryDateLiteral, amount, currency } =
                    activeSub;

                  const {
                    active: isActivePromo,
                    createdDate,
                    expiryDate,
                  } = activePromo;

                  return (
                    <tr key={index + 1}>
                      <td>{index + 1}</td>
                      <td>{name}</td>
                      <td>{username}</td>
                      <td>{email}</td>
                      <td>
                        {isVerified ? (
                          <FaCheck size={30} color="#17991d" />
                        ) : (
                          <FaTimes size={30} color="#f02c2c" />
                        )}
                      </td>
                      <td>{new Date(createdAt).toDateString()}</td>
                      <td>
                        {" "}
                        {active ? (
                          <FaCheck size={30} color="#17991d" />
                        ) : (
                          <FaTimes size={30} color="#f02c2c" />
                        )}
                      </td>
                      <td>{plan ? plan : "-"}</td>
                      <td>{expiryDateLiteral ? expiryDateLiteral : "-"}</td>
                      <td>{amount ? amount : "-"}</td>
                      <td>{currency ? currency : "-"}</td>
                      <td>
                        {" "}
                        {isActivePromo ? (
                          <FaCheck size={30} color="#17991d" />
                        ) : (
                          <FaTimes size={30} color="#f02c2c" />
                        )}
                      </td>
                      <td>{createdDate ? createdDate : "-"}</td>
                      <td>{expiryDate ? expiryDate : "-"}</td>
                      <td>
                        {makeLoading ? (
                          <LoaderTwo />
                        ) : isAdmin ? (
                          <Button variant="secondary" disabled>
                            Admin
                          </Button>
                        ) : (
                          <Button onClick={() => handleMakeAdmin(_id, name)}>
                            Make Admin
                          </Button>
                        )}
                      </td>
                    </tr>
                  );
                })}
            </tbody>
          </Table>
          <PaginationDashboard page={page} pages={pages} regular={true} />
        </Container>
      )}
    </section>
  );
};

export default RegularUsers;
