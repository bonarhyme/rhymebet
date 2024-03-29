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
  SendVerificationAgainReducer,
} from "./reducers/userReducers";

import {
  gameToCartReducer,
  postGamesReducer,
  getGamesListReducer,
  getFreeGamesListReducer,
  getPremiumGamesListReducer,
  updateGamesWasWonReducer,
  deleteGameReducer,
  getShortFreeGamesListReducer,
} from "./reducers/gameReducers";

import {
  getPaystackConfigReducer,
  confirmPaystackPaymentReducer,
  getActiveSubscriptionsReducer,
  getActiveSingleSubReducer,
  getAllSubReducer,
  getUserAllSubReducer,
} from "./reducers/subscriptionReducers";

import { getAllUsersReducer } from "./reducers/adminReducers";

import {
  getRegularUsersReducer,
  makeAdminReducer,
  getAdminUsersReducer,
  demoteAdminReducer,
  getSuperAdminUsersReducer,
  makeSuperAdminReducer,
} from "./reducers/superAdminReducers";

import { getUserRefsReducer } from "./reducers/referralReducer";

import {
  createNewsReducer,
  getAllNewsReducer,
  getSingleNewsReducer,
  createCommentReducer,
  createReplyReducer,
} from "./reducers/newsReducers";

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
  paystackPaymentConfirm: confirmPaystackPaymentReducer,
  subscriptionActiveGet: getActiveSubscriptionsReducer,
  singleSubActiveGet: getActiveSingleSubReducer,
  allSubget: getAllSubReducer,
  gamesFreeShortListGet: getShortFreeGamesListReducer,
  usersAllGet: getAllUsersReducer,
  userAllSubGet: getUserAllSubReducer,
  userRefsGet: getUserRefsReducer,
  regularUsersGet: getRegularUsersReducer,
  adminMake: makeAdminReducer,
  adminUsersGet: getAdminUsersReducer,
  adminDemote: demoteAdminReducer,
  superAdminGet: getSuperAdminUsersReducer,
  superAdminMake: makeSuperAdminReducer,
  verificationSendAgain: SendVerificationAgainReducer,
  newsCreate: createNewsReducer,
  newsGetAll: getAllNewsReducer,
  newsGetSingle: getSingleNewsReducer,
  commentCreate: createCommentReducer,
  replyCreate: createReplyReducer,
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
