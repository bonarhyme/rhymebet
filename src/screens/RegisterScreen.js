import React, { useState, useEffect } from "react";
import { Col, Container, Row, Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Message from "../components/Message";
import Loader from "../components/Loader";
import { register } from "../actions/userActions";
import { Helmet } from "react-helmet";
import MyButton from "../components/buttons/MyButton";

const Register = ({ history, location }) => {
  const [username, setUsername] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [message, setMessage] = useState(null);
  const [referralUsername, setReferralUsername] = useState("");
  // const [checked, setChecked] = useState("false");

  const { search } = location;

  const ref = search.split("=")[1];

  const dispatch = useDispatch();

  const userRegister = useSelector((state) => state.userRegister);
  const { loading, error, userInfo } = userRegister;

  useEffect(() => {
    let userInfoFromStorage = localStorage.getItem("userInfo")
      ? JSON.parse(localStorage.getItem("userInfo"))
      : null;
    if (userInfoFromStorage) {
      history.push("/");
    } else {
      if (location.search) {
        setReferralUsername(ref);
      } else {
        setReferralUsername("");
      }
    }
  }, [history, userInfo, location.search, ref]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      setMessage("Passwords do not match");
    } else {
      dispatch(
        register(
          name,
          email.toLowerCase().trim(),
          username,
          password,
          referralUsername
        )
      );
    }
  };

  // const remind = (e) => {
  //   e.target.setCustomValidity(
  //     "You must accept our terms and conditions to continue"
  //   );
  // };

  return (
    <main className="register">
      <Helmet>
        <title>Registration - Rhymebet</title>
        <meta name="description" content="rhymebet Registration" />
      </Helmet>
      <Container
        fluid
        className="justify-content-center align-items-center form-container"
      >
        <Row className="justify-content-center ">
          <Col className="py-5 my-5 register-container box-shadow-white" md={6}>
            <h2 className="main-header text-center">OPEN AN ACCOUNT</h2>
            {userInfo ? (
              <>
                <Message variant="success">
                  <h3>
                    Please check your email <code>{userInfo.email} </code>to
                    confirm your account.
                  </h3>
                  <hr />

                  <p>
                    If you haven't received our email in 15 minutes, please
                    check your spam folder.
                  </p>

                  <p>
                    Sometimes it takes a bit longer, be patient! Double-check
                    your spam and trash folders!
                  </p>
                </Message>
                <p className="about-p  text-center my-2">
                  RECEIVED EMAIL?{" "}
                  <Link to="/verify" className="register-btn">
                    VERIFY NOW
                  </Link>
                </p>
                <p className="about-p  text-center my-2">
                  NO EMAIL YET?{" "}
                  <Link to="/send-verification-again" className="register-btn">
                    REQUEST VERIFICATION CODE AGAIN
                  </Link>
                </p>
              </>
            ) : (
              <div className="form-container">
                <Form onSubmit={handleSubmit}>
                  {error && <Message variant="danger">{error}</Message>}
                  {loading && <Loader />}
                  <Form.Group controlId="formBasicName">
                    <Form.Label>Full Name</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="e.g John Doe"
                      className="about-form"
                      onChange={(e) => setName(e.target.value)}
                      required
                      autoFocus
                    />
                  </Form.Group>
                  <Form.Group controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control
                      type="email"
                      placeholder="e.g name@example.com"
                      className="about-form"
                      onChange={(e) => setEmail(e.target.value)}
                      required
                    />
                  </Form.Group>
                  <Form.Group controlId="formBasicUsername">
                    <Form.Label>Username</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="e.g John123"
                      className="about-form"
                      onChange={(e) => setUsername(e.target.value)}
                      required
                    />
                  </Form.Group>
                  {message && <Message variant="danger">{message}</Message>}
                  <Form.Group controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control
                      type="password"
                      placeholder="Enter a strong password"
                      className="about-form"
                      onChange={(e) => {
                        setPassword(e.target.value);
                        setMessage(null);
                      }}
                      required
                    />
                  </Form.Group>
                  <Form.Group controlId="confirmPassword">
                    <Form.Label>Confirm Password</Form.Label>

                    <Form.Control
                      type="password"
                      placeholder="Confirm your password"
                      className="about-form"
                      onChange={(e) => {
                        setConfirmPassword(e.target.value);
                        setMessage(null);
                      }}
                    ></Form.Control>
                  </Form.Group>
                  <input
                    type="checkbox"
                    name="accept"
                    required
                    // onInvalid={remind}
                  />{" "}
                  I accept your{" "}
                  <Link to="/discover/terms">terms and conditions</Link>
                  {/* onInvalid="this.setCustomValidity('Please accept our terms and conditions to continue')"
                  onInput="setCustomValidity('')" */}
                  <MyButton />
                  <p className="about-p  text-center my-2">
                    ALREADY HAVE AN ACCOUNT?{" "}
                    <Link to="login" className="register-btn">
                      LOGIN
                    </Link>
                  </p>
                </Form>
              </div>
            )}
          </Col>
        </Row>
      </Container>
    </main>
  );
};

export default Register;
