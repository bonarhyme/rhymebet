import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { LinkContainer } from "react-router-bootstrap";
import { FaPlus } from "react-icons/fa";

import { USER_LOGOUT } from "../constants/userConstants";

const AdminGames = () => {
  const dispatch = useDispatch();

  const { userInfo } = useSelector((state) => state.userLogin);

  useEffect(() => {
    if (!userInfo && userInfo.isAdmin === false) {
      localStorage.clear();
      dispatch({ type: USER_LOGOUT });
      document.location.href = "/login";
    }
  }, [userInfo, dispatch]);

  return (
    <main>
      <LinkContainer to="/admin/games/create-game">
        <button className="mx-2 mt-5 button-block wide-block bg-blue color-white">
          <FaPlus size={30} /> CREATE NEW GAMES
        </button>
      </LinkContainer>
    </main>
  );
};

export default AdminGames;
