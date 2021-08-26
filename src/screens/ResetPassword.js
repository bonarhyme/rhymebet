import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Row, Col, Form } from "react-bootstrap";
import { Helmet } from "react-helmet";

import MyButton from "../components/buttons/MyButton";
import { userResetPassword } from "../actions/userActions";
import Loader from "../components/Loader";
import Message from "../components/Message";

const ResetPassword = ({ location, history }) => {
  const [password, setPassword] = useState("");
  const [password2, setPassword2] = useState("");
  const [token, setToken] = useState(null);
  const [passwordError, setPasswordError] = useState(false);
  const [passwordErrorMessage, setPasswordErrorMessage] = useState("");

  const dispatch = useDispatch();

  const { loading, success, error, serverReply } = useSelector(
    (state) => state.userResetPassword
  );

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (window.confirm("Are you sure your input is correct?")) {
      if (password === password2) {
        setPasswordError(false);
        dispatch(userResetPassword(password, token));
      } else {
        setPasswordError(true);
        setPasswordErrorMessage("Your passwords do not match.");
      }
    }
  };

  useEffect(() => {
    setToken(location.pathname.split("rd/")[1]);
  }, [location.pathname]);

  useEffect(() => {
    if (success) {
      setTimeout(() => {
        history.push("/login");
      }, 7000);
    }
  });

  return loading ? (
    <Loader />
  ) : (
    <main className="form-container register">
      <Helmet>
        <title>Reset Password - Rhymebet</title>
        <meta name="description" content="Rhymebet Reset Password page" />
      </Helmet>
      <Row className="justify-content-center ">
        <Col className="py-5 my-5 register-container box-shadow-white" md={6}>
          <h1 className="main-header">Reset Password</h1>
          <Form onSubmit={handleSubmit} className="my-5 center-form">
            {passwordError && (
              <Message variant="danger">{passwordErrorMessage}</Message>
            )}
            {error && <Message variant="danger">{error}</Message>}
            {success && (
              <Message variant="success">{serverReply.message}</Message>
            )}

            <Form.Group controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="ENTER PASSWORD"
                className="about-form"
                onChange={(e) => {
                  setPassword(e.target.value);
                  setPasswordError(false);
                }}
                required
                autoFocus
              />
              <Form.Text className="text-muted">
                <b>Hint:</b> Password must be 7 characters or more.
              </Form.Text>
            </Form.Group>

            <Form.Group controlId="formBasicPassword2">
              <Form.Label>Confirm Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="CONFIRM PASSWORD"
                className="about-form"
                onChange={(e) => {
                  setPassword2(e.target.value);
                  setPasswordError(false);
                }}
                // pattern={
                //   "^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{7,})"
                // }
                required
              />
            </Form.Group>
            <MyButton />
          </Form>
        </Col>
      </Row>
    </main>
  );
};

export default ResetPassword;
