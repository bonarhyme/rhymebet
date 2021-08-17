import React, { useEffect, useState } from "react";
import { Table, Button, Container } from "react-bootstrap";
import { FaCheck, FaTimes } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { getSuperAdminUsers } from "../../actions/superAdminActions";
import Loader from "../Loader";
// import LoaderTwo from "../LoaderTwo";
import MessageTwo from "../MessageTwo";
import PaginationDashboard from "../PaginationDashboard";

const SuperAdminUsers = () => {
  const dispatch = useDispatch();

  const pageNumber = 1;
  const [list, setList] = useState([]);
  const [page, setPage] = useState(null);
  const [pages, setPages] = useState(null);

  const { loading, success, serverReply, error } = useSelector(
    (state) => state.superAdminGet
  );

  useEffect(() => {
    setList([]);
    dispatch(getSuperAdminUsers(pageNumber));
    // eslint-disable-next-line
  }, []);

  useEffect(() => {
    if (success) {
      setList(serverReply.allUsers);
      setPage(serverReply.page);
      setPages(serverReply.pages);
    }
    // eslint-disable-next-line
  }, [dispatch, success]);

  //   const handleDemoteAdmin = (id, name) => {
  //     if (
  //       window.confirm(`Are you sure you want to remove ${name} as an admin?`)
  //     ) {
  //       dispatch(demoteAdmin(id));
  //     }
  //   };

  return (
    <section>
      <h3 className="other-header">Super Admin Users</h3>
      {error && <MessageTwo variant="danger">{error}</MessageTwo>}
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
                <th>Super_Admin</th>
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
                    isSuperAdmin,
                  } = user;

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
                        {" "}
                        {isSuperAdmin ? (
                          <FaCheck size={30} color="#17991d" />
                        ) : (
                          <FaTimes size={30} color="#f02c2c" />
                        )}
                      </td>
                    </tr>
                  );
                })}
            </tbody>
          </Table>
          <PaginationDashboard page={page} pages={pages} superAdmin />
        </Container>
      )}
    </section>
  );
};

export default SuperAdminUsers;
