import React, { useEffect } from "react";
import { Col, Row, Form } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { FaPaperPlane } from "react-icons/fa";

import { clearGamesFromCart, postGames } from "../../actions/gamesActions";
import Message from "../Message";
import Loader from "../Loader";

const PostGames = () => {
  const [isFree, setIsFree] = React.useState(true);

  const dispatch = useDispatch();

  const { cartGames: games } = useSelector((state) => state.cart);
  const { loading, error, success, serverReply } = useSelector(
    (state) => state.postedGame
  );

  // Bring in the server reply from posted game and useDispatch to clear statea and local storage

  const handleSubmit = (e) => {
    e.preventDefault();
    if (games) {
      dispatch(postGames(games, isFree));
    } else {
      window.alert("There are no games in the cart");
    }
  };

  useEffect(() => {
    if (success) {
      dispatch(clearGamesFromCart());
    }
  }, [serverReply]);

  return (
    <section className="form-container ">
      <Row className="justify-content-center ">
        <Col className=" register-container box-shadow-white" md={6}>
          <h2 className="main-header">POST GAMES</h2>
          {loading && <Loader />}
          <Form onSubmit={handleSubmit}>
            {serverReply && (
              <Message variant="success">{serverReply.message}</Message>
            )}
            {error && <Message variant="danger">{error}</Message>}
            <Form.Group>
              <Form.Check
                type="radio"
                id="premium"
                label=" Make Premium"
                name="isFree"
                onChange={() => setIsFree(false)}
                required
              />
            </Form.Group>
            <Form.Group>
              <Form.Check
                type="radio"
                id="free"
                label=" Make Free"
                name="isFree"
                onChange={() => setIsFree(true)}
                required
              />
            </Form.Group>

            <button
              className="mx-2 mt-2 button-block wide-block bg-blue color-white mx-auto "
              title="Post all games"
            >
              POST GAMES <FaPaperPlane size={30} />
            </button>
          </Form>
        </Col>
      </Row>
    </section>
  );
};

export default PostGames;
