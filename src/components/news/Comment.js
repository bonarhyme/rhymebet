import React, { useEffect, useState } from "react";
import { Form, Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { FaUser } from "react-icons/fa";

import { createReply } from "../../actions/newsAction";
import LoaderTwo from "../LoaderTwo";
import MessageTwo from "../MessageTwo";
import { CREATE_REPLY_RESET } from "../../constants/newsConstants";

const CommentHouse = ({ com, fNewsId }) => {
  const dispatch = useDispatch();
  const [commentId, setCommentId] = useState("");
  const [reply, setReply] = useState("");
  const [showReplyBox, setShowReplyBox] = useState(false);
  const [showReplies, setShowReplies] = useState(false);

  const {
    loading: replyLoading,
    success: replySuccess,
    serverReply: replyServerReply,
    error: replyError,
  } = useSelector((state) => state.replyCreate);

  //   useEffect(() => {
  //     if (replySuccess) {
  //       setShowReplyBox(false);
  //     }
  //     // eslint-disable-next-line
  //   }, [replySuccess]);

  useEffect(() => {
    if (replySuccess) {
      setTimeout(() => {
        dispatch({ type: CREATE_REPLY_RESET });
      }, 4000);
    }
  }, [dispatch, replySuccess]);

  const handleSubmitReply = (e) => {
    e.preventDefault();
    dispatch(createReply(fNewsId, commentId, reply));
  };

  return (
    <div className="commenter-box">
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
      {replyLoading ? (
        <LoaderTwo />
      ) : (
        <div>
          <Button
            variant="outline-primary"
            size="sm"
            onClick={() => {
              setCommentId(com._id);
              setShowReplyBox(!showReplyBox);
            }}
          >
            reply
          </Button>
          <Button
            variant="outline-warning"
            size="sm"
            className="mx-2"
            onClick={() => {
              setShowReplies(!showReplies);
            }}
          >
            view replies ({com.replies.length})
          </Button>
        </div>
      )}

      {showReplyBox && (
        <div className="reply-box">
          <Form onSubmit={handleSubmitReply}>
            {replyError && <MessageTwo>{replyError}</MessageTwo>}
            {replyServerReply && replyServerReply.message && (
              <MessageTwo variant="success">
                {replyServerReply.message}
              </MessageTwo>
            )}{" "}
            <Form.Group controlId="reply">
              <Form.Label></Form.Label>
              <Form.Control
                as="textarea"
                minLength={1}
                rows={3}
                type="text"
                placeholder="Reply with respect..."
                className="about-form"
                onChange={(e) => setReply(e.target.value)}
                required
              />
            </Form.Group>
            <div style={{ display: "flex", justifyContent: "flex-end" }}>
              <Button type="submit" size="sm" style={{ marginTop: "1rem" }}>
                submit
              </Button>
            </div>
          </Form>
        </div>
      )}
      <div className="replier-box">
        {showReplies &&
          com.replies.map((re, index) => {
            return (
              <div key={index} className="replier-container">
                <span className="replier-meta">
                  <small className="bold-sm">
                    <FaUser size={10} /> {re.username}
                  </small>
                  <small className="small-date">
                    {new Date(re.createdAt).toString().slice(0, 3)}{" "}
                    {new Date(re.createdAt).toLocaleString()}
                  </small>
                </span>
                <p>{re.reply}</p>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default CommentHouse;
