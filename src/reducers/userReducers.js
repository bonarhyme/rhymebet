import {
  USER_REGISTER_REQUEST,
  USER_REGISTER_SUCCESS,
  USER_REGISTER_FAIL,
  USER_VERIFICATION_REQUEST,
  USER_VERIFICATION_SUCCESS,
  USER_VERIFICATION_FAIL,
  USER_LOGIN_FAIL,
  USER_LOGIN_REQUEST,
  USER_LOGIN_SUCCESS,
  USER_LOGOUT,
  CHECK_USER_TOKEN_REQUEST,
  CHECK_USER_TOKEN_SUCCESS,
  CHECK_USER_TOKEN_FAIL,
} from "../constants/userConstants";

export const userRegisterReducer = (state = {}, action) => {
  switch (action.type) {
    case USER_REGISTER_REQUEST:
      return { loading: true };
    case USER_REGISTER_SUCCESS:
      return { loading: false, success: true, userInfo: action.payload };
    case USER_REGISTER_FAIL:
      return { loading: false, success: false, error: action.payload };

    default:
      return state;
  }
};

export const verifyUserReducer = (state = {}, action) => {
  switch (action.type) {
    case USER_VERIFICATION_REQUEST:
      return { loading: true };
    case USER_VERIFICATION_SUCCESS:
      return { loading: false, success: true, userVerified: action.payload };
    case USER_VERIFICATION_FAIL:
      return { loading: false, success: false, error: action.payload };

    default:
      return state;
  }
};

export const userLoginReducer = (state = {}, action) => {
  switch (action.type) {
    case USER_LOGIN_REQUEST:
      return { loading: true };
    case USER_LOGIN_SUCCESS:
      return { loading: false, userInfo: action.payload };
    case USER_LOGIN_FAIL:
      return { loading: false, error: action.payload };
    case USER_LOGOUT:
      return {};
    default:
      return state;
  }
};

export const checkTokenReducer = (state = {}, action) => {
  switch (action.type) {
    case CHECK_USER_TOKEN_REQUEST:
      return { loading: true };
    case CHECK_USER_TOKEN_SUCCESS:
      return { loading: false, success: true, tokenChecked: action.payload };
    case CHECK_USER_TOKEN_FAIL:
      return { loading: false, success: false, error: action.payload };

    default:
      return state;
  }
};
