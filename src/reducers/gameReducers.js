import {
  GAME_TO_CART_ADD,
  GAME_TO_CART_REMOVE,
  GAME_TO_CART_CLEAR,
  // GAME_TO_CART_EDIT,
  CREATE_GAMES_REQUEST,
  CREATE_GAMES_SUCCESS,
  CREATE_GAMES_FAIL,
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

export const gameToCartReducer = (state = { cartGames: [] }, action) => {
  switch (action.type) {
    case GAME_TO_CART_ADD:
      const game = action.payload;

      const existItem = state.cartGames.find((x) => x.id === game.id);

      if (existItem) {
        return {
          ...state,
          cartGames: state.cartGames.map((x) => (x === existItem ? game : x)),
        };
      } else {
        return {
          ...state,
          cartGames: [...state.cartGames, game],
        };
      }

    case GAME_TO_CART_REMOVE:
      return {
        ...state,
        cartGames: state.cartGames.filter((game) => game.id !== action.payload),
      };

    case GAME_TO_CART_CLEAR:
      return {
        ...state,
        cartGames: [],
      };

    // case GAME_TO_CART_EDIT:
    //   return {
    //     ...state,
    //     cartGames: state.cartGames.filter(
    //       (game) => game.id !== action.payload.id
    //     ),
    //     theGame: action.payload.id,
    //   };
    default:
      return state;
  }
};

export const postGamesReducer = (state = {}, action) => {
  switch (action.type) {
    case CREATE_GAMES_REQUEST:
      return {
        loading: true,
      };

    case CREATE_GAMES_SUCCESS:
      return {
        loading: false,
        success: true,
        serverReply: action.payload,
      };
    case CREATE_GAMES_FAIL:
      return { loading: false, success: false, error: action.payload };
    default:
      return state;
  }
};

export const getGamesListReducer = (state = {}, action) => {
  switch (action.type) {
    case GET_GAMES_LIST_REQUEST:
      return {
        loading: true,
      };

    case GET_GAMES_LIST_SUCCESS:
      return {
        loading: false,
        success: true,
        serverReply: action.payload,
      };
    case GET_GAMES_LIST_FAIL:
      return { loading: false, success: false, error: action.payload };
    default:
      return state;
  }
};

export const getFreeGamesListReducer = (state = {}, action) => {
  switch (action.type) {
    case GET_FREE_GAMES_LIST_REQUEST:
      return {
        loading: true,
      };

    case GET_FREE_GAMES_LIST_SUCCESS:
      return {
        loading: false,
        success: true,
        serverReply: action.payload,
      };
    case GET_FREE_GAMES_LIST_FAIL:
      return { loading: false, success: false, error: action.payload };
    default:
      return state;
  }
};

export const getPremiumGamesListReducer = (state = {}, action) => {
  switch (action.type) {
    case GET_PREMIUM_GAMES_LIST_REQUEST:
      return {
        loading: true,
      };

    case GET_PREMIUM_GAMES_LIST_SUCCESS:
      return {
        loading: false,
        success: true,
        serverReply: action.payload,
      };
    case GET_PREMIUM_GAMES_LIST_FAIL:
      return { loading: false, success: false, error: action.payload };
    default:
      return state;
  }
};

export const updateGamesWasWonReducer = (state = {}, action) => {
  switch (action.type) {
    case UPDATE_GAMES_WASWON_REQUEST:
      return {
        loading: true,
      };

    case UPDATE_GAMES_WASWON_SUCCESS:
      return {
        loading: false,
        success: true,
        serverReply: action.payload,
      };
    case UPDATE_GAMES_WASWON_FAIL:
      return { loading: false, success: false, error: action.payload };
    default:
      return state;
  }
};

export const deleteGameReducer = (state = {}, action) => {
  switch (action.type) {
    case DELETE_GAME_REQUEST:
      return {
        loading: true,
      };

    case DELETE_GAME_SUCCESS:
      return {
        loading: false,
        success: true,
        serverReply: action.payload,
      };
    case DELETE_GAME_FAIL:
      return { loading: false, success: false, error: action.payload };
    default:
      return state;
  }
};
