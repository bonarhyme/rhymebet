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
  USER_FORGOT_PASSWORD_REQUEST,
  USER_FORGOT_PASSWORD_SUCCESS,
  USER_FORGOT_PASSWORD_FAIL,
  USER_RESET_PASSWORD_REQUEST,
  USER_RESET_PASSWORD_SUCCESS,
  USER_RESET_PASSWORD_FAIL,
  GET_USER_PROFILE_REQUEST,
  GET_USER_PROFILE_SUCCESS,
  GET_USER_PROFILE_FAIL,
  UPDATE_USER_PROFILE_REQUEST,
  UPDATE_USER_PROFILE_SUCCESS,
  UPDATE_USER_PROFILE_FAIL,
  UPDATE_USER_PASSWORD_REQUEST,
  UPDATE_USER_PASSWORD_SUCCESS,
  UPDATE_USER_PASSWORD_FAIL,
} from "../constants/userConstants";

export const userRegisterReducer = (state = {}, action) => {
  switch (action.type) {
    case USER_REGISTER_REQUEST:
      return { loading: true };
    case USER_REGISTER_SUCCESS:
      return { loading: false, success: true, userInfo: action.payload };
    case USER_REGISTER_FAIL:
      return { loading: false, success: false, error: action.payload };
    case USER_LOGOUT:
      return {};
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
    case USER_LOGOUT:
      return {};
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
    case USER_LOGOUT:
      return {};
    default:
      return state;
  }
};

export const userForgotPasswordReducer = (state = {}, action) => {
  switch (action.type) {
    case USER_FORGOT_PASSWORD_REQUEST:
      return { loading: true };
    case USER_FORGOT_PASSWORD_SUCCESS:
      return { loading: false, success: true, serverReply: action.payload };
    case USER_FORGOT_PASSWORD_FAIL:
      return { loading: false, success: false, error: action.payload };
    case USER_LOGOUT:
      return {};
    default:
      return state;
  }
};

export const userResetPasswordReducer = (state = {}, action) => {
  switch (action.type) {
    case USER_RESET_PASSWORD_REQUEST:
      return { loading: true };
    case USER_RESET_PASSWORD_SUCCESS:
      return { loading: false, success: true, serverReply: action.payload };
    case USER_RESET_PASSWORD_FAIL:
      return { loading: false, success: false, error: action.payload };
    case USER_LOGOUT:
      return {};
    default:
      return state;
  }
};

export const getUserProfileReducer = (state = {}, action) => {
  switch (action.type) {
    case GET_USER_PROFILE_REQUEST:
      return { loading: true };
    case GET_USER_PROFILE_SUCCESS:
      return { loading: false, success: true, profile: action.payload };
    case GET_USER_PROFILE_FAIL:
      return { loading: false, success: false, error: action.payload };
    case USER_LOGOUT:
      return {};
    default:
      return state;
  }
};

export const updateUserProfileReducer = (state = {}, action) => {
  switch (action.type) {
    case UPDATE_USER_PROFILE_REQUEST:
      return { loading: true };
    case UPDATE_USER_PROFILE_SUCCESS:
      return { loading: false, success: true, updatedProfile: action.payload };
    case UPDATE_USER_PROFILE_FAIL:
      return { loading: false, success: false, error: action.payload };
    case USER_LOGOUT:
      return {};
    default:
      return state;
  }
};

export const updateUserPasswordReducer = (state = {}, action) => {
  switch (action.type) {
    case UPDATE_USER_PASSWORD_REQUEST:
      return { loading: true };
    case UPDATE_USER_PASSWORD_SUCCESS:
      return { loading: false, success: true, updatedPassword: action.payload };
    case UPDATE_USER_PASSWORD_FAIL:
      return { loading: false, success: false, errorPassword: action.payload };
    case USER_LOGOUT:
      return {};
    default:
      return state;
  }
};
