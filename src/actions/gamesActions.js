import axios from "axios";
import {
  CREATE_GAMES_REQUEST,
  CREATE_GAMES_SUCCESS,
  CREATE_GAMES_FAIL,
  GAME_TO_CART_ADD,
  GAME_TO_CART_REMOVE,
  GAME_TO_CART_CLEAR,
  // GAME_TO_CART_EDIT,
  GET_GAMES_LIST_REQUEST,
  GET_GAMES_LIST_SUCCESS,
  GET_GAMES_LIST_FAIL,
  GET_FREE_GAMES_LIST_REQUEST,
  GET_FREE_GAMES_LIST_SUCCESS,
  GET_FREE_GAMES_LIST_FAIL,
  GET_PREMIUM_GAMES_LIST_REQUEST,
  GET_PREMIUM_GAMES_LIST_SUCCESS,
  GET_PREMIUM_GAMES_LIST_FAIL,
  UPDATE_GAMES_WASWON_REQUEST,
  UPDATE_GAMES_WASWON_SUCCESS,
  UPDATE_GAMES_WASWON_FAIL,
  DELETE_GAME_REQUEST,
  DELETE_GAME_SUCCESS,
  DELETE_GAME_FAIL,
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

export const getGamesList =
  (isFree, creatorUsername, pageNumber) => async (dispatch, getState) => {
    try {
      dispatch({
        type: GET_GAMES_LIST_REQUEST,
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

      let response;

      if (creatorUsername) {
        response = await axios.get(
          `${variables.backendLink}/api/games/list/?isFree=${isFree}&creator=${creatorUsername}&pageNumber=${pageNumber}`,
          config
        );
      } else {
        response = await axios.get(
          `${variables.backendLink}/api/games/list/?isFree=${isFree}&pageNumber=${pageNumber}`,
          config
        );
      }

      const { data } = response;
      dispatch({
        type: GET_GAMES_LIST_SUCCESS,
        payload: data,
      });
    } catch (error) {
      dispatch({
        type: GET_GAMES_LIST_FAIL,
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      });
    }
  };

export const getFreeGamesList =
  (isFree, creatorUsername, pageNumber) => async (dispatch, getState) => {
    try {
      dispatch({
        type: GET_FREE_GAMES_LIST_REQUEST,
      });

      // const {
      //   userLogin: { userInfo },
      // } = getState();

      const config = {
        headers: {
          "Content-Type": "application/json",
          // Authorization: `Bearer ${userInfo.token}`,
        },
      };

      let response;

      if (creatorUsername) {
        response = await axios.get(
          `${variables.backendLink}/api/games/list/?isFree=${isFree}&creator=${creatorUsername}&pageNumber=${pageNumber}`,
          config
        );
      } else {
        response = await axios.get(
          `${variables.backendLink}/api/games/list/?isFree=${isFree}&pageNumber=${pageNumber}`,
          config
        );
      }

      const { data } = response;
      dispatch({
        type: GET_FREE_GAMES_LIST_SUCCESS,
        payload: data,
      });
    } catch (error) {
      dispatch({
        type: GET_FREE_GAMES_LIST_FAIL,
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      });
    }
  };

export const getPremiumGamesList =
  (isFree, creatorUsername, pageNumber) => async (dispatch, getState) => {
    try {
      dispatch({
        type: GET_PREMIUM_GAMES_LIST_REQUEST,
      });

      const {
        userLogin: { userInfo },
      } = getState();

      let config;
      if (userInfo && userInfo.token) {
        config = {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${
              userInfo && userInfo.token ? userInfo.token : userInfo
            }`,
          },
        };
      } else {
        config = {
          headers: {
            "Content-Type": "application/json",
          },
        };
      }

      let response;

      if (creatorUsername) {
        response = await axios.get(
          `${variables.backendLink}/api/games/list/premium/?creator=${creatorUsername}&pageNumber=${pageNumber}`,
          config
        );
      } else {
        response = await axios.get(
          `${variables.backendLink}/api/games/list/premium/?isFree=${isFree}&pageNumber=${pageNumber}`,
          config
        );
      }

      const { data } = response;
      dispatch({
        type: GET_PREMIUM_GAMES_LIST_SUCCESS,
        payload: data,
      });
    } catch (error) {
      dispatch({
        type: GET_PREMIUM_GAMES_LIST_FAIL,
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      });
    }
  };

export const deleteGame = (id) => async (dispatch, getState) => {
  try {
    dispatch({
      type: DELETE_GAME_REQUEST,
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

    let { data } = await axios.delete(
      `${variables.backendLink}/api/games/list/game/delete/${id}`,
      config
    );

    dispatch({
      type: DELETE_GAME_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: DELETE_GAME_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const updateGamesWasWon =
  (id, status = null) =>
  async (dispatch, getState) => {
    try {
      dispatch({
        type: UPDATE_GAMES_WASWON_REQUEST,
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

      let { data } = await axios.put(
        `${variables.backendLink}/api/games/list/game/update/${id}/?status=${status}`,
        "",
        config
      );

      dispatch({
        type: UPDATE_GAMES_WASWON_SUCCESS,
        payload: data,
      });
    } catch (error) {
      dispatch({
        type: UPDATE_GAMES_WASWON_FAIL,
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      });
    }
  };
