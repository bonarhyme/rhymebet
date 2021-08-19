import React, { useState } from "react";
import { Col, Container, Form, Row } from "react-bootstrap";
import { FaPlus } from "react-icons/fa";
import { useSelector } from "react-redux";
import { LinkContainer } from "react-router-bootstrap";

import MyButton from "../buttons/MyButton";
import Loader from "../Loader";
import Message from "../Message";

const CreateNews = () => {
  const [image, setImage] = useState("");

  const { loading, error, success, serverReply } = useSelector(
    (state) => state.newsCreate
  );

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Worki!!!!!");
  };
  const handleImages = async (e) => {
    // console.log(e.target.files);

    const file = e.target.files[0];
    var reader = new FileReader();
    var url = reader.readAsDataURL(file);

    reader.onloadend = function (e) {
      setImage(reader.result);
    };
  };
  return (
    <main className="register">
      <Container fluid className="justify-content-center align-items-center">
        <Row className="justify-content-center ">
          <Col className="py-5 my-5 register-container box-shadow-white" md={6}>
            <h2 className="main-header text-center">Create Games</h2>
            <Form onSubmit={handleSubmit}>
              {error && <Message variant="danger">{error}</Message>}
              {loading && <Loader />}
              {image && (
                <img
                  src={image}
                  alt=""
                  height="200"
                  width="200"
                  style={{ objectFit: "contain" }}
                />
              )}
              <Form.Group controlId="formBasicImages">
                <Form.File
                  accept="/image/*"
                  multiple={true}
                  onChange={(e) => handleImages(e)}
                />
              </Form.Group>
              <Form.Group controlId="formBasicTitle">
                <Form.Label>Title</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="News Title"
                  className="about-form"
                  //   onChange={(e) => setUsername(e.target.value)}
                  required
                  autoFocus
                />
              </Form.Group>

              <MyButton />
            </Form>
          </Col>
        </Row>
      </Container>
    </main>
  );
};

export default CreateNews;
