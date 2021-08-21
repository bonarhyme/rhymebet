import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { FaUser } from "react-icons/fa";

import { createComment, getSingleNews } from "../actions/newsAction";
import Loader from "../components/Loader";
import LoaderTwo from "../components/LoaderTwo";
import Message from "../components/Message";
import MessageTwo from "../components/MessageTwo";
import { Form, Button } from "react-bootstrap";

const SingleNews = ({ location }) => {
  const dispatch = useDispatch();
  const newsId = location.pathname.split("s/")[1];

  const [images, setImages] = useState([]);
  const [poster, setPoster] = useState({});
  const [title, setTitle] = useState("");
  const [fullStory, setFullStory] = useState("");
  const [comments, setComments] = useState([]);
  const [createdDate, setCreatedDate] = useState("");
  const [updatedDate, setUpdatedDate] = useState("");

  const [comment, setComment] = useState("");
  const [commentId, setCommentId] = useState("");

  const { loading, success, serverReply, error } = useSelector(
    (state) => state.newsGetSingle
  );

  const {
    loading: commentLoading,
    success: commentSuccess,
    serverReply: commentServerReply,
    error: commentError,
  } = useSelector((state) => state.commentCreate);

  useEffect(() => {
    dispatch(getSingleNews(newsId));
    // eslint-disable-next-line
  }, [dispatch, newsId, commentSuccess]);

  useEffect(() => {
    if (success) {
      setImages(serverReply.images);
      setTitle(serverReply.title);
      setFullStory(serverReply.fullStory);
      setComments(serverReply.comment);
      setCreatedDate(serverReply.createdAt);
      setUpdatedDate(serverReply.updatedAt);
      setPoster(serverReply.poster);
      setCommentId(serverReply._id);
    }
    // eslint-disable-next-line
  }, [dispatch, success]);

  const handleSubmitComment = (e) => {
    e.preventDefault();
    dispatch(createComment(commentId, comment));
  };
  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <main>
          {error && <Message variant="danger">{error}</Message>}
          <h1 className="main-header">{title}</h1>
          <p className="poster-details">
            <span>
              <FaUser /> {poster.username}
            </span>
            <span>
              Created: {new Date(createdDate).toString().slice(0, 3)}{" "}
              {new Date(createdDate).toLocaleString()}{" "}
            </span>
            <span>
              updated: {new Date(updatedDate).toString().slice(0, 3)}{" "}
              {new Date(updatedDate).toLocaleString()}{" "}
            </span>
          </p>
          <div className="news-image-container">
            {images &&
              images.length > 0 &&
              images.map((image, index) => {
                return (
                  <img src={image.url} alt={title ? title : ""} key={index} />
                );
              })}
          </div>
          <div className="news-paragraph">
            <p>{fullStory ? fullStory : ""}</p>
            <div className="comment-box">
              {commentLoading ? (
                <LoaderTwo />
              ) : (
                <Form onSubmit={handleSubmitComment}>
                  <h3 className="other-header">Comments</h3>
                  {commentError && <MessageTwo>{commentError}</MessageTwo>}
                  {commentSuccess && (
                    <MessageTwo variant="success">
                      {commentServerReply.message}
                    </MessageTwo>
                  )}
                  <Form.Group controlId="comment">
                    <Form.Label>
                      {/* <b className="comment-order">Comment Now</b> */}
                    </Form.Label>
                    <Form.Control
                      as="textarea"
                      minLength={25}
                      rows={4}
                      type="text"
                      placeholder="Create an exciting comment and contribute to the story...."
                      className="about-form"
                      onChange={(e) => setComment(e.target.value)}
                      required
                    />
                  </Form.Group>
                  <Button type="submit" style={{ marginTop: "1rem" }}>
                    Add comment
                  </Button>
                </Form>
              )}
            </div>
            <div className="comments">
              {comments.length > 0 && (
                <p className=" font-size-big">
                  {comments.length} Total{" "}
                  {comments.length === 1 ? "Comment" : "Comments"}
                </p>
              )}
              {comments.length > 0 ? (
                comments.map((com, index) => {
                  return (
                    <div key={index} className="commenter-box">
                      <span className="commenter-meta">
                        <small className="bold">
                          <FaUser size={13} /> {com.username}
                        </small>
                        <small className="small-date">
                          {new Date(com.createdAt).toString().slice(0, 3)}{" "}
                          {new Date(com.createdAt).toLocaleString()}
                        </small>
                      </span>
                      <p>{com.comment}</p>
                    </div>
                  );
                })
              ) : (
                <Message>
                  Be the first to comment. Try it and get 7 years of good luck!
                </Message>
              )}
            </div>
          </div>
        </main>
      )}
    </>
  );
};

export default SingleNews;
