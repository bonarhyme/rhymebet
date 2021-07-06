import {
  GAME_TO_CART_ADD,
  GAME_TO_CART_REMOVE,
  GAME_TO_CART_CLEAR,
  // GAME_TO_CART_EDIT,
  CREATE_GAMES_REQUEST,
  CREATE_GAMES_SUCCESS,
  CREATE_GAMES_FAIL,
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
