import React, { useState } from "react";
import { Container, Form, Button, Row, Col } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

import Loader from "../components/Loader";
import Message from "../components/Message";
import { SendVerificationAgain } from "../actions/userActions";
import { Helmet } from "react-helmet";

const SendVerificationAgainScreen = () => {
  const [email, setEmail] = useState("");

  const dispatch = useDispatch();

  const { loading, success, error, serverReply } = useSelector(
    (state) => state.verificationSendAgain
  );

  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch(SendVerificationAgain(email));
  };

  return (
    <main className="register">
      <Helmet>
        <title>Send verification Again - Rhymebet</title>
        <meta name="description" content="rhymebet - send veification again" />
      </Helmet>
      <Container className="mb-5">
        <Row className="justify-content-center ">
          <Col className="py-5 my-5 register-container box-shadow-white" md={6}>
            <h2 className="main-header">Receive Verification Again</h2>
            {loading ? (
              <Loader />
            ) : (
              <>
                <div className="form-container">
                  <Form onSubmit={handleSubmit}>
                    {error && <Message variant="danger">{error}</Message>}
                    {success && (
                      <Message variant="success">{serverReply.message}</Message>
                    )}
                    <Form.Group>
                      <Form.Control
                        placeholder="Enter your email"
                        onChange={(e) => setEmail(e.target.value)}
                        required
                        autoSave
                      />
                    </Form.Group>
                    <Button
                      variant="info"
                      type="submit"
                      className=" d-block mx-auto mt-2"
                    >
                      Request Email Again
                    </Button>
                    <p className="about-p  text-center my-2">
                      ALREADY VERIFIED ACCOUNT?{" "}
                      <Link to="login" className="register-btn">
                        LOGIN
                      </Link>
                    </p>
                    <p className="text-center my-2">
                      VERIFICATION EMAIL RECEIVED?{" "}
                      <Link to="/verify" className="register-btn">
                        VERIFY ACCOUNT NOW
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

export default SendVerificationAgainScreen;
