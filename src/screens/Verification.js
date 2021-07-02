import React, { useState, useEffect } from "react";
import { Container, Form, Button, Row, Col } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import Helmet from "react-helmet";
import { Link } from "react-router-dom";

import Loader from "../components/Loader";
import Message from "../components/Message";
import { verifyUser } from "../actions/userActions";

const Verification = ({ history, location }) => {
  const [username, setUsername] = useState("");
  const [token, setToken] = useState("");

  const dispatch = useDispatch();

  const userVerify = useSelector((state) => state.userVerify);
  const { loading, success, error, userVerified } = userVerify;

  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch(verifyUser(username, token));
  };

  useEffect(() => {
    let userInfoFromStorage = localStorage.getItem("userInfo")
      ? JSON.parse(localStorage.getItem("userInfo"))
      : null;
    if (userInfoFromStorage) {
      history.push("/");
    }
  }, [history]);

  useEffect(() => {
    if (userVerified) {
      setTimeout(() => {
        history.push("/login");
      }, 7000);
    }
  }, [userVerified, history]);

  return (
    <main className="register">
      <Helmet>
        <title>Verify User - Rhymebet</title>
        <meta name="description" content="Login" />
      </Helmet>
      <Container className="mb-5">
        <Row className="justify-content-center ">
          <Col className="py-5 my-5 register-container box-shadow-white" md={6}>
            <h2 className="main-header">Account Verification </h2>
            {loading ? (
              <Loader />
            ) : (
              <>
                <div className="form-container">
                  <Form onSubmit={handleSubmit}>
                    {error && <Message variant="danger">{error}</Message>}
                    {success && (
                      <Message variant="success">
                        {userVerified.message}
                      </Message>
                    )}
                    <Form.Group>
                      <Form.Label>Username</Form.Label>
                      <Form.Control
                        placeholder="Enter your username"
                        onChange={(e) => setUsername(e.target.value)}
                        required
                      />
                    </Form.Group>
                    <Form.Group>
                      <Form.Label>Token</Form.Label>
                      <Form.Control
                        placeholder="Enter your token from email"
                        onChange={(e) => setToken(e.target.value)}
                        required
                      />
                    </Form.Group>
                    <Button
                      variant="outline-info"
                      type="submit"
                      className="button-block d-block mx-auto mt-2"
                    >
                      VERIFY ACCOUNT
                    </Button>
                    <p className="about-p  text-center my-2">
                      ALREADY VERIFIED ACCOUNT?{" "}
                      <Link to="login" className="register-btn">
                        LOGIN
                      </Link>
                    </p>
                    <p className=" text-center my-2">
                      DON'T HAVE AN ACCOUNT?{" "}
                      <Link to="/register" className="register-btn">
                        REGISTER
                      </Link>
                    </p>
                  </Form>
                </div>
              </>
            )}
          </Col>
        </Row>
      </Container>
    </main>
  );
};

export default Verification;
