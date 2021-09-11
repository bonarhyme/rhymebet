import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { FaUser } from "react-icons/fa";

import { createComment, getSingleNews } from "../actions/newsAction";
import Loader from "../components/Loader";
import LoaderTwo from "../components/LoaderTwo";
import Message from "../components/Message";
import MessageTwo from "../components/MessageTwo";
import { Form, Button } from "react-bootstrap";
import CommentHouse from "../components/news/Comment";
import { CREATE_COMMENT_RESET } from "../constants/newsConstants";
import { Helmet } from "react-helmet";

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

  const [fNewsId, setFNewsId] = useState("");
  const [comment, setComment] = useState("");

  const { loading, success, serverReply, error } = useSelector(
    (state) => state.newsGetSingle
  );

  const {
    loading: commentLoading,
    success: commentSuccess,
    serverReply: commentServerReply,
    error: commentError,
  } = useSelector((state) => state.commentCreate);

  const { success: replySuccess } = useSelector((state) => state.replyCreate);

  useEffect(() => {
    dispatch(getSingleNews(newsId));
    // eslint-disable-next-line
  }, [dispatch, newsId, commentSuccess, replySuccess]);

  useEffect(() => {
    if (success) {
      setImages(serverReply.images);
      setTitle(serverReply.title);
      setFullStory(serverReply.fullStory);
      setComments(serverReply.comment);
      setCreatedDate(serverReply.createdAt);
      setUpdatedDate(serverReply.updatedAt);
      setPoster(serverReply.poster);
      setFNewsId(serverReply._id);
    }
    // eslint-disable-next-line
  }, [dispatch, success]);

  useEffect(() => {
    if (commentSuccess) {
      setTimeout(() => {
        dispatch({ type: CREATE_COMMENT_RESET });
      }, 4000);
    }
    // eslint-disable-next-line
  }, [dispatch, commentSuccess]);

  const handleSubmitComment = (e) => {
    e.preventDefault();
    dispatch(createComment(fNewsId, comment));
  };

  const focusDiv = useRef(null);

  useEffect(() => {
    focusDiv.current.focus();
  }, []);

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <main>
          <Helmet>
            <title>{title} - Rhymebet</title>
            <meta name="description" content={`rhymebet - ${title}`} />
          </Helmet>
          {error && <Message variant="danger">{error}</Message>}
          <h1 className="main-header-2" ref={focusDiv} tabIndex="-1">
            {title}
          </h1>
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
                  {commentServerReply && commentServerReply.message && (
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
                      minLength={4}
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
                comments.map((com, index) => (
                  <CommentHouse key={index} com={com} fNewsId={fNewsId} />
                ))
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
