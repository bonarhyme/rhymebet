import React, { useEffect, useRef, useState } from "react";
import { Col, Container, Form, Row } from "react-bootstrap";
import { FaPlusCircle, FaTimesCircle } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { createNews } from "../../actions/newsAction";

import MyButton from "../buttons/MyButton";
import Loader from "../Loader";
import Message from "../Message";
import MessageTwo from "../MessageTwo";

const CreateNews = () => {
  const dispatch = useDispatch();

  const clearRef = useRef();
  const clearrRef = useRef();
  const clearrrRef = useRef();

  const [images, setImages] = useState([]);
  const [title, setTitle] = useState("");
  const [fullStory, setFullstory] = useState("");

  const { loading, error, success, serverReply } = useSelector(
    (state) => state.newsCreate
  );

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(createNews(title, fullStory, images));
  };

  const handleImages = async (e) => {
    const file = e.target.files;

    setImages([...file]);
  };

  const handleRemove = (image) => {
    if (window.confirm("Are you sure want to remove this image?")) {
      const newList = images.filter((im) => im !== image);
      setImages(newList);
    }
  };

  useEffect(() => {
    if (success) {
      setImages([]);
      setTitle("");
      setFullstory("");
      clearRef.current.value = "";
      clearrRef.current.value = "";
      clearrrRef.current.value = "";
    }
  }, [success]);

  return (
    <main className="register">
      <Container fluid className="justify-content-center align-items-center">
        <Row className="justify-content-center ">
          <Col className="py-5 my-5 register-container box-shadow-white" md={6}>
            <h2 className="main-header text-center">Create News</h2>
            {loading && <Loader />}

            <Form onSubmit={handleSubmit}>
              {error && <Message variant="danger">{error}</Message>}
              {success && (
                <MessageTwo variant="success">{serverReply.message}</MessageTwo>
              )}

              {images.length > 0 &&
                images.map((image, index) => (
                  <span key={index} className="image-wrapper">
                    <FaTimesCircle
                      size={25}
                      color="#f02c2c"
                      onClick={() => handleRemove(image)}
                      className="times"
                    />

                    <img
                      src={URL.createObjectURL(image)}
                      alt=""
                      height="200"
                      width="200"
                      style={{
                        objectFit: "cover",
                        borderRadius: "15px",
                      }}
                      className="p-1"
                    />
                  </span>
                ))}
              <Form.Group>
                <Form.Label
                  className=" mb-2 mt-5 button-block wide-block bg-blue color-white text-center"
                  title="Select Image"
                  style={{ cursor: "pointer" }}
                  htmlFor="image"
                >
                  <FaPlusCircle size={30} color="white" /> Select Pictures
                </Form.Label>
                <Form.File
                  name="image"
                  id="image"
                  accept="/image/*"
                  multiple={true}
                  onChange={(e) => handleImages(e)}
                  style={{ display: "none" }}
                  className=" mb-2 mt-5 button-block wide-block bg-blue color-white text-center"
                  autoFocus
                  required
                  ref={clearrrRef}
                />
              </Form.Group>
              <Form.Group controlId="formBasicTitle">
                <Form.Label className="big-label">Title</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="News Title"
                  className="about-form"
                  onChange={(e) => setTitle(e.target.value)}
                  required
                  ref={clearrRef}
                />
              </Form.Group>
              <Form.Group controlId="formBasicFullStory">
                <Form.Label className="big-label">Full story</Form.Label>
                <Form.Control
                  as="textarea"
                  rows={7}
                  type="text"
                  placeholder="Tell us the full story...."
                  className="about-form"
                  onChange={(e) => setFullstory(e.target.value)}
                  required
                  ref={clearRef}
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
