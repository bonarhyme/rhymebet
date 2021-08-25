import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Row, Col, Form } from "react-bootstrap";
import { Helmet } from "react-helmet";

import MyButton from "../components/buttons/MyButton";
import { userForgotPassword } from "../actions/userActions";
import Loader from "../components/Loader";
import Message from "../components/Message";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");

  const dispatch = useDispatch();

  const { loading, success, error, serverReply } = useSelector(
    (state) => state.userForgotPassword
  );

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (window.confirm("Are you sure your input is correct?")) {
      dispatch(userForgotPassword(email));
    }
  };

  return loading ? (
    <Loader />
  ) : (
    <main className="form-container register">
      <Helmet>
        <title>Forgot Password - Rhymebet</title>
        <meta name="description" content="Rhymebet Forgot Password" />
      </Helmet>
      <Row className="justify-content-center ">
        <Col className="py-5 my-5 register-container box-shadow-white" md={6}>
          <h1 className="main-header">Forgot Password</h1>
          <Form onSubmit={handleSubmit} className="my-5 center-form">
            {error && <Message variant="danger">{error}</Message>}
            {success && (
              <Message variant="success">{serverReply.message}</Message>
            )}
            <Form.Group controlId="formBasicEmail">
              <Form.Control
                type="email"
                placeholder="ENTER EMAIL ADDRESS"
                className="about-form"
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <Form.Text className="text-muted">
                We'll never share your email with anyone else.
              </Form.Text>
            </Form.Group>
            <MyButton />
          </Form>
        </Col>
      </Row>
    </main>
  );
};

export default ForgotPassword;
