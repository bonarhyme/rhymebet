import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { FaUser } from "react-icons/fa";

import { getSingleNews } from "../actions/newsAction";
import Loader from "../components/Loader";
import Message from "../components/Message";

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

  const { loading, success, serverReply, error } = useSelector(
    (state) => state.newsGetSingle
  );

  useEffect(() => {
    dispatch(getSingleNews(newsId));
    // eslint-disable-next-line
  }, [dispatch, newsId]);

  useEffect(() => {
    if (success) {
      setImages(serverReply.images);
      setTitle(serverReply.title);
      setFullStory(serverReply.fullStory);
      setComments(serverReply.comment);
      setCreatedDate(serverReply.createdAt);
      setUpdatedDate(serverReply.updatedAt);
      setPoster(serverReply.poster);
    }
    // eslint-disable-next-line
  }, [dispatch, success]);
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
              Created Date: {new Date(createdDate).toString().slice(0, 3)}{" "}
              {new Date(createdDate).toLocaleString()}{" "}
            </span>
            <span>
              updated Date: {new Date(updatedDate).toString().slice(0, 3)}{" "}
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
          </div>
        </main>
      )}
    </>
  );
};

export default SingleNews;
