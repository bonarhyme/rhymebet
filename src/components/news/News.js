import React, { useEffect, useState } from "react";
import { Button, Container, Image } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { LinkContainer } from "react-router-bootstrap";

import Notice from "../subscriptions/Notice";
import ActiveNotice from "../subscriptions/ActiveNotice";
import Message from "../Message";
import { getAllNews } from "../../actions/newsAction";
import { FaUser } from "react-icons/fa";

const News = () => {
  const dispatch = useDispatch();

  const pageNumber = 1;
  const [news, setNews] = useState([]);

  const { loading, success, serverReply, error } = useSelector(
    (state) => state.newsGetAll
  );

  useEffect(() => {
    dispatch(getAllNews(pageNumber));
  }, [dispatch]);

  useEffect(() => {
    if (success) {
      setNews(serverReply.allNews);
      console.log(serverReply.allNews);
    }
  }, [dispatch, success]);

  return (
    <section id="sportsnews" name="sportsnews">
      <h2 className="main-header">Sports News</h2>
      <Container>
        <Notice />
        <ActiveNotice />
      </Container>
      <Container className="news-container news-container">
        {news && news.length > 0 ? (
          news.map((story, index) => {
            const { title, images, fullStory, createdAt, _id, poster } = story;
            const { username } = poster;
            return (
              <div className="py-3 single-news" key={index + 1}>
                <h4>{title}</h4>
                <small>
                  {new Date(createdAt).toString().slice(0, 3)}{" "}
                  {new Date(createdAt).toLocaleString()}{" "}
                </small>
                <small className="poster">
                  <FaUser />
                  {username}
                </small>
                <div className="image-container">
                  <Image src={images[0].url} alt={title} fluid />
                </div>
                <p>{fullStory.slice(0, 170)}</p>
                <LinkContainer to={`/sportsnews/${_id}`}>
                  <Button>Read more</Button>
                </LinkContainer>
              </div>
            );
          })
        ) : (
          <Message>There are no news at the moment.</Message>
        )}
      </Container>
      <LinkContainer to="/sportsnews" className="news-button">
        <button className="button-block wide-block d-block mx-auto bg-green color-white my-4 mx-3">
          View All Sports News
        </button>
      </LinkContainer>
    </section>
  );
};

export default News;
