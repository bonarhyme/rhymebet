import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import {
  userRegisterReducer,
  verifyUserReducer,
  userLoginReducer,
  checkTokenReducer,
  userForgotPasswordReducer,
  userResetPasswordReducer,
  getUserProfileReducer,
  updateUserProfileReducer,
  updateUserPasswordReducer,
} from "./reducers/userReducers";

import {
  gameToCartReducer,
  postGamesReducer,
  getGamesListReducer,
  getFreeGamesListReducer,
  getPremiumGamesListReducer,
  updateGamesWasWonReducer,
  deleteGameReducer,
} from "./reducers/gameReducers";

import { getPaystackConfigReducer } from "./reducers/subscriptionReducers";

const reducer = combineReducers({
  userRegister: userRegisterReducer,
  userVerify: verifyUserReducer,
  userLogin: userLoginReducer,
  tokenCheck: checkTokenReducer,
  userForgotPassword: userForgotPasswordReducer,
  userResetPassword: userResetPasswordReducer,
  userProfile: getUserProfileReducer,
  userUpdatedProfile: updateUserProfileReducer,
  userUpdatedPassword: updateUserPasswordReducer,
  cart: gameToCartReducer,
  postedGame: postGamesReducer,
  gamesListGet: getGamesListReducer,
  gamesFreeListGet: getFreeGamesListReducer,
  gamesPremiumListGet: getPremiumGamesListReducer,
  gamesWasWonUpdate: updateGamesWasWonReducer,
  gameDelete: deleteGameReducer,
  paystackConfigGet: getPaystackConfigReducer,
});

// Local storage matters
const userInfoFromStorage = localStorage.getItem("userInfo")
  ? JSON.parse(localStorage.getItem("userInfo"))
  : null;

const cartGamesFromStorage = localStorage.getItem("cartGames")
  ? JSON.parse(localStorage.getItem("cartGames"))
  : [];

// initial state
const initialState = {
  userLogin: {
    userInfo: userInfoFromStorage,
  },
  cart: {
    cartGames: cartGamesFromStorage,
  },
};

const middleware = [thunk];

const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
