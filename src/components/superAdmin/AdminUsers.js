import React, { useEffect, useState } from "react";
import { Table, Button, Container } from "react-bootstrap";
import { FaCheck, FaTimes } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { getAdminUsers } from "../../actions/superAdminActions";
import Loader from "../Loader";
import Message from "../Message";
import PaginationDashboard from "../PaginationDashboard";

const AdminUsers = () => {
  const dispatch = useDispatch();

  const pageNumber = 1;
  const [list, setList] = useState([]);
  const [page, setPage] = useState(null);
  const [pages, setPages] = useState(null);

  const { loading, success, serverReply, error } = useSelector(
    (state) => state.adminUsersGet
  );

  useEffect(() => {
    setList([]);
    dispatch(getAdminUsers(pageNumber));
  }, []);

  useEffect(() => {
    if (success) {
      setList(serverReply.allUsers);
      setPage(serverReply.page);
      setPages(serverReply.pages);
    }
  }, [dispatch, success]);

  return (
    <section>
      <h3 className="other-header">Admin Users</h3>
      {error && <Message variant="danger">{error}</Message>}
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
                <th>Remove</th>
              </tr>
            </thead>
            <tbody>
              {list &&
                list.length > 0 &&
                list.map((user, index) => {
                  const { _id, name, username, email, isVerified } = user;

                  return (
                    <tr key={index + 1}>
                      <td>{index + 1}</td>
                      <td>{name}</td>
                      <td>{username}</td>
                      <td>{email}</td>
                      <td>
                        {" "}
                        {isVerified ? (
                          <FaCheck size={30} color="#17991d" />
                        ) : (
                          <FaTimes size={30} color="#f02c2c" />
                        )}
                      </td>

                      <td>
                        {/* {makeLoading ? (
                          <LoaderTwo />
                        ) : isAdmin ? (
                          <Button variant="secondary" disabled>
                            Admin
                          </Button>
                        ) : (
                          <Button onClick={() => handleMakeAdmin(_id, name)}>
                            Make Admin
                          </Button>
                        )} */}
                      </td>
                    </tr>
                  );
                })}
            </tbody>
          </Table>
          <PaginationDashboard page={page} pages={pages} admin />
        </Container>
      )}
    </section>
  );
};

export default AdminUsers;
