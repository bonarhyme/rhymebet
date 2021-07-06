import axios from "axios";
import {
  CREATE_GAMES_REQUEST,
  CREATE_GAMES_SUCCESS,
  CREATE_GAMES_FAIL,
  GAME_TO_CART_ADD,
  GAME_TO_CART_REMOVE,
  GAME_TO_CART_CLEAR,
  // GAME_TO_CART_EDIT,
} from "../constants/gameConstants";
import { variables } from "../data/variables";

export const addGameToCart =
  (
    id,
    league,
    leagueFull,
    country,
    countryFull,
    clubs,
    clubsFull,
    win,
    ov,
    gg,
    corner,
    matchTime
  ) =>
  async (dispatch, getState) => {
    dispatch({
      type: GAME_TO_CART_ADD,
      payload: {
        id,
        league,
        leagueFull,
        country,
        countryFull,
        clubs,
        clubsFull,
        win,
        ov,
        gg,
        corner,
        matchTime,
      },
    });
    localStorage.setItem(
      "cartGames",
      JSON.stringify(getState().cart.cartGames)
    );
  };

export const removeGameFromCart = (id) => (dispatch, getState) => {
  dispatch({
    type: GAME_TO_CART_REMOVE,
    payload: id,
  });

  localStorage.setItem("cartGames", JSON.stringify(getState().cart.cartGames));
};
export const clearGamesFromCart = () => (dispatch, getState) => {
  dispatch({
    type: GAME_TO_CART_CLEAR,
    payload: "Clearing!",
  });

  localStorage.removeItem("cartGames");
};

// export const editGameInCart = (id) => (dispatch, getState) => {
//   localStorage.getItem("cartGames")
//   dispatch({
//     type: GAME_TO_CART_EDIT,
//     payload: id,
//   });
// };

export const postGames = (games, isFree) => async (dispatch, getState) => {
  try {
    dispatch({
      type: CREATE_GAMES_REQUEST,
    });

    const {
      userLogin: { userInfo },
    } = getState();

    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${userInfo.token}`,
      },
    };

    const { data } = await axios.post(
      `${variables.backendLink}/api/games/create`,
      { games, isFree },
      config
    );

    dispatch({
      type: CREATE_GAMES_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: CREATE_GAMES_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
