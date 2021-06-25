import React, { useEffect, useState } from "react";
import { Col, Container, Row, Form, Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

import Message from "../components/Message";
import Loader from "../components/Loader";
import { login } from "../actions/userActions";
import { Helmet } from "react-helmet";

const Login = ({ history }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();

  const userLogin = useSelector((state) => state.userLogin);

  const { loading, error, userInfo } = userLogin;

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(login(username, password));
  };

  useEffect(() => {
    if (userInfo && userInfo.username) {
      history.push("/");
    }
  }, [history, userInfo]);

  return (
    <main className="form-container register">
      <Helmet>
        <title>Login - Rhymebet</title>
        <meta name="description" content="Login" />
      </Helmet>
      <Container fluid className="justify-content-center align-items-center">
        <Row className="justify-content-center ">
          <Col className="py-5 my-5 register-container box-shadow-white" md={6}>
            <h2 className="main-header text-center">LOGIN</h2>
            <Form onSubmit={handleSubmit}>
              {error && <Message variant="danger">{error}</Message>}
              {loading && <Loader />}
              <Form.Group controlId="formBasicUsername">
                <Form.Label>Username</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="USERNAME"
                  className="about-form"
                  onChange={(e) => setUsername(e.target.value)}
                  required
                  autoFocus
                />
              </Form.Group>
              <Form.Group controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>

                <Form.Control
                  type="password"
                  placeholder="PASSWORD"
                  className="about-form"
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </Form.Group>

              <Button
                variant="outline-info"
                type="submit"
                className="button-block d-block mx-auto mt-2"
              >
                SUBMIT
              </Button>
              <p className=" text-center my-2">
                DON'T HAVE AN ACCOUNT?{" "}
                <Link to="/register" className="register-btn">
                  REGISTER
                </Link>
              </p>
              <p className="text-center my-2">
                ACCOUNT NOT VERIFIED?{" "}
                <Link to="/verify" className="register-btn">
                  VERIFY
                </Link>
              </p>
              <p className="text-center my-2">
                FORGOT YOUR PASSWORD?{" "}
                <Link to="/forgotpassword" className="register-btn">
                  RESET PASSWORD
                </Link>
              </p>
            </Form>
          </Col>
        </Row>
      </Container>
    </main>
  );
};

export default Login;
