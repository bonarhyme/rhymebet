import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Form, Col, Row } from "react-bootstrap";

import { getUserProfile, updateUserProfile } from "../actions/userActions";
import MyButton from "../components/buttons/MyButton";
import Loader from "../components/Loader";
import Message from "../components/Message";
import PasswordUpdate from "../components/PasswordUpdate";

const Profile = ({ history }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const dispatch = useDispatch();

  const { userInfo } = useSelector((state) => state.userLogin);

  const { profile: user } = useSelector((state) => state.userProfile);

  const {
    loading: profileUpdateLoading,
    success: profileUpdateSuccess,
    error,
    updatedProfile,
  } = useSelector((state) => state.userUpdatedProfile);

  useEffect(() => {
    if (!userInfo) {
      history.push("/login");
    } else {
      if (!user || !user.name) {
        dispatch(getUserProfile());
      } else {
        setName(user.name);
        setEmail(user.email);
      }
    }
  }, [dispatch, history, userInfo, user]);

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(updateUserProfile(email, name));
  };

  return (
    <main className="register ">
      <Row className="justify-content-center ">
        <Col className="py-5 my-5 register-container box-shadow-white" md={6}>
          <div className=" form-container">
            <Form onSubmit={submitHandler}>
              <h2 className="other-header">Update Profile</h2>
              {error && <Message variant="danger">{error}</Message>}
              {profileUpdateSuccess && (
                <Message variant="success">{updatedProfile.message}</Message>
              )}
              {profileUpdateLoading && <Loader />}

              <Form.Group controlId="name">
                <Form.Label>Name</Form.Label>
                <Form.Control
                  type="name"
                  placeholder="Enter name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                ></Form.Control>
              </Form.Group>

              <Form.Group controlId="email">
                <Form.Label>Email Address</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="Enter email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                ></Form.Control>
              </Form.Group>
              <MyButton text="Update Profile" />
            </Form>
          </div>
        </Col>
      </Row>

      <PasswordUpdate />
    </main>
  );
};

export default Profile;
