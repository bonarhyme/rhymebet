import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Col, Row, Table } from "react-bootstrap";
import { FaTimes, FaCheck, FaInfoCircle } from "react-icons/fa";

import { getUserRefs } from "../../actions/referralActions";
import Loader from "../Loader";
import Message from "../Message";
import { HashLink } from "react-router-hash-link";
import PaginationDashboard from "../PaginationDashboard";
import { variables } from "../../data/variables";

const Referrals = () => {
  const dispatch = useDispatch();

  const pageNumer = 1;
  const [allRefs, setAllRefs] = useState([]);
  const [subCount, setSubCount] = useState(null);
  const [verified, setVerified] = useState([]);
  const [unverified, setUnverified] = useState([]);
  const [paid, setPaid] = useState([]);
  const [unpaid, setUnpaid] = useState([]);
  const [page, setPage] = useState(null);
  const [pages, setPages] = useState(null);

  const { loading, success, serverReply, error } = useSelector(
    (state) => state.userRefsGet
  );

  const {
    userInfo: { username },
  } = useSelector((state) => state.userLogin);

  useEffect(() => {
    dispatch(getUserRefs(pageNumer));
    // eslint-disable-next-line
  }, []);

  useEffect(() => {
    if (success) {
      setAllRefs(serverReply.refs);
      setSubCount(serverReply.refCount);
      setPaid(serverReply.paid);
      setUnpaid(serverReply.unpaid);
      setVerified(serverReply.verified);
      setUnverified(serverReply.unverified);
      setPage(serverReply.page);
      setPages(serverReply.pages);
    }
    // eslint-disable-next-line
  }, [dispatch, success]);
  return (
    <section>
      <h3 className="other-header">Referrals</h3>
      {error && <Message variant="danger">{error}</Message>}
      {loading ? (
        <Loader />
      ) : (
        <Row>
          <Col xs={12} md={3}>
            <p>
              Total Referrals: <b>{subCount}</b>
            </p>
            <p>
              Settled Referrals: <b>{paid ? paid.length : 0}</b>
            </p>
            <p>
              Unsettled Referrals: <b>{unpaid ? unpaid.length : 0}</b>
            </p>
            <p>
              Verified Referrals: <b>{verified ? verified.length : 0}</b>
            </p>
            <p>
              Unverified Referrals: <b>{unverified ? unverified.length : 0}</b>
            </p>
          </Col>
          <Col xs={12} md={9}>
            <p>
              Referral link:{" "}
              <b>
                {variables.frontendLink}/register/?ref=
                {username ? username : ""}
              </b>
            </p>
            <p>
              <small>
                <FaInfoCircle color="#3498db" size={20} /> Each referral gives
                you 1 points.
              </small>
            </p>
            <p>
              <small>
                <FaInfoCircle color="#3498db" size={20} />
                10 points gives you 1 day access to our{" "}
                <HashLink to="/#premium">premium games</HashLink>
              </small>
            </p>
            <Table responsive bordered striped hover>
              <thead>
                <tr>
                  <th>#</th>
                  <th>Referred_User</th>
                  <th>Verified</th>
                  <th>Settled</th>
                </tr>
              </thead>
              <tbody>
                {allRefs.map((r, index) => {
                  const { referredUsername, isVerified, isReferralPaid } = r;

                  return (
                    <tr key={index + 1}>
                      <td>{index + 1}</td>
                      <td>{referredUsername}</td>
                      <td>
                        {isVerified ? (
                          <FaCheck size={30} color="#17991d" />
                        ) : (
                          <FaTimes size={30} color="#f02c2c" />
                        )}
                      </td>
                      <td>
                        {isReferralPaid ? (
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
            <PaginationDashboard referral={true} page={page} pages={pages} />
          </Col>
        </Row>
      )}
    </section>
  );
};

export default Referrals;
