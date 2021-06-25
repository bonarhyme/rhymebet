import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import {
  userRegisterReducer,
  verifyUserReducer,
  userLoginReducer,
  checkTokenReducer,
} from "./reducers/userReducers";

const reducer = combineReducers({
  userRegister: userRegisterReducer,
  userVerify: verifyUserReducer,
  userLogin: userLoginReducer,
  tokenCheck: checkTokenReducer,
});

// Local storage matters
const userInfoFromStorage = localStorage.getItem("userInfo")
  ? JSON.parse(localStorage.getItem("userInfo"))
  : null;

// initial state
const initialState = {
  userLogin: {
    userInfo: userInfoFromStorage,
  },
};

const middleware = [thunk];

const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
