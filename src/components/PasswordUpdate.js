import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Form, Col, Row } from "react-bootstrap";

import { updateUserPassword } from "../actions/userActions";
import MyButton from "../components/buttons/MyButton";
import Loader from "../components/Loader";
import Message from "../components/Message";

const PasswordUpdate = () => {
  const [currentPassword, setCurrentPassword] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [passwordMessage, setPasswordMessage] = useState("");
  const [passwordMessageError, setPasswordMessageError] = useState(false);

  const dispatch = useDispatch();

  const {
    loading: passwordUpdateLoading,
    success: passwordUpdateSuccess,
    errorPassword,
    updatedPassword,
  } = useSelector((state) => state.userUpdatedPassword);

  const submitHandlerPassword = (e) => {
    e.preventDefault();

    if (password === confirmPassword) {
      setPasswordMessageError(false);
      dispatch(updateUserPassword(currentPassword, password));
    } else {
      setPasswordMessageError(true);
      setPasswordMessage("Your passwords do not match.");
    }
  };
  return (
    <Row className="justify-content-center ">
      <Col className="py-5 my-5 register-container box-shadow-white" md={6}>
        <div className="form-container">
          <Form onSubmit={submitHandlerPassword}>
            <h2 className="other-header color-red bold">Update Password</h2>

            {errorPassword && (
              <Message variant="danger">{errorPassword}</Message>
            )}
            {passwordMessageError && (
              <Message variant="danger">{passwordMessage}</Message>
            )}
            {passwordUpdateSuccess && (
              <Message variant="success">{updatedPassword.message}</Message>
            )}
            {passwordUpdateLoading && <Loader />}
            <Form.Group controlId="current-password">
              <Form.Label>Current Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Enter current password"
                onChange={(e) => setCurrentPassword(e.target.value)}
                required
              ></Form.Control>
            </Form.Group>
            <Form.Group controlId="password">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Enter password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              ></Form.Control>
            </Form.Group>

            <Form.Group controlId="confirmPassword">
              <Form.Label>Confirm Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Confirm Password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                required
              ></Form.Control>
            </Form.Group>

            <MyButton text="Update Password" className="color-red" />
          </Form>
        </div>
      </Col>
    </Row>
  );
};

export default PasswordUpdate;
