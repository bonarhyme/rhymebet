import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { LinkContainer } from "react-router-bootstrap";
import { FaPlus } from "react-icons/fa";
import { Col, Row } from "react-bootstrap";

import { USER_LOGOUT } from "../constants/userConstants";
import { getGamesList } from "../actions/gamesActions";
import FreeGamesList from "../components/games/FreeGamesList";

const AdminGames = () => {
  const dispatch = useDispatch();

  const [creator, setCreator] = useState();

  const { userInfo } = useSelector((state) => state.userLogin);

  const { loading, success, serverReply, error } = useSelector(
    (state) => state.gamesListGet
  );

  useEffect(() => {
    if (!userInfo && userInfo.isAdmin === false) {
      localStorage.clear();
      dispatch({ type: USER_LOGOUT });
      document.location.href = "/login";
    }
  }, [userInfo, dispatch]);

  // useEffect(() => {
  //   dispatch(getGamesList(true, creator, 1));
  // }, []);

  // useEffect(() => {
  //   if (success) {
  //     console.log(serverReply.games);
  //   }
  // }, [dispatch, success, serverReply]);

  return (
    <main>
      <LinkContainer to="/admin/games/create-game">
        <button className="mx-2 mt-5 button-block wide-block bg-blue color-white">
          <FaPlus size={30} /> CREATE NEW GAMES
        </button>
      </LinkContainer>

      <Row>
        <Col>
          <FreeGamesList />
        </Col>
      </Row>
    </main>
  );
};

export default AdminGames;
