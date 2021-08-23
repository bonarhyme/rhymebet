import axios from "axios";

import { variables } from "../data/variables";

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
  USER_SEND_VERI_AGAIN_REQUEST,
  USER_SEND_VERI_AGAIN_SUCCESS,
  USER_SEND_VERI_AGAIN_FAIL,
} from "../constants/userConstants";

export const register =
  (name, email, username, password, referralUsername) => async (dispatch) => {
    try {
      dispatch({
        type: USER_REGISTER_REQUEST,
      });
      const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };
      const { data } = await axios.post(
        `${variables.backendLink}/api/user/register/?ref=${referralUsername}`,
        {
          name,
          email,
          username,
          password,
        },
        config
      );
      dispatch({
        type: USER_REGISTER_SUCCESS,
        payload: data,
      });
    } catch (error) {
      dispatch({
        type: USER_REGISTER_FAIL,
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      });
    }
  };

export const verifyUser = (username, token) => async (dispatch) => {
  try {
    dispatch({
      type: USER_VERIFICATION_REQUEST,
    });

    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    const { data } = await axios.put(
      `${variables.backendLink}/api/user/verify-user`,
      { username, token },
      config
    );

    dispatch({
      type: USER_VERIFICATION_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: USER_VERIFICATION_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const login = (username, password) => async (dispatch) => {
  try {
    dispatch({
      type: USER_LOGIN_REQUEST,
    });

    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    const { data } = await axios.post(
      `${variables.backendLink}/api/user/login`,
      { username, password },
      config
    );
    dispatch({
      type: USER_LOGIN_SUCCESS,
      payload: data,
    });

    localStorage.setItem("userInfo", JSON.stringify(data));
  } catch (error) {
    dispatch({
      type: USER_LOGIN_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const logout = () => (dispatch) => {
  dispatch({ type: USER_LOGOUT });
  localStorage.clear();
  // This redirects the user on logout
  document.location.href = "/login";
};

export const checkToken = (userInfoFromStorage) => async (dispatch) => {
  try {
    dispatch({
      type: CHECK_USER_TOKEN_REQUEST,
    });

    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${userInfoFromStorage.token}`,
      },
    };
    const { data } = await axios.get(
      `${variables.backendLink}/api/user/check-token`,
      config
    );
    dispatch({
      type: CHECK_USER_TOKEN_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: CHECK_USER_TOKEN_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const userForgotPassword = (email) => async (dispatch) => {
  try {
    dispatch({
      type: USER_FORGOT_PASSWORD_REQUEST,
    });

    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    const { data } = await axios.post(
      `${variables.backendLink}/api/user/forgot-password`,
      { email },
      config
    );
    dispatch({
      type: USER_FORGOT_PASSWORD_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: USER_FORGOT_PASSWORD_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const userResetPassword = (password, token) => async (dispatch) => {
  try {
    dispatch({
      type: USER_RESET_PASSWORD_REQUEST,
    });

    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    const { data } = await axios.post(
      `${variables.backendLink}/api/user/reset-password`,
      { password, token },
      config
    );
    dispatch({
      type: USER_RESET_PASSWORD_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: USER_RESET_PASSWORD_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const getUserProfile = () => async (dispatch, getState) => {
  try {
    dispatch({
      type: GET_USER_PROFILE_REQUEST,
    });

    const {
      userLogin: { userInfo },
    } = getState();

    let config;

    if (userInfo) {
      config = {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${userInfo.token}`,
        },
      };
    } else {
      config = {
        headers: {
          "Content-Type": "application/json",
        },
      };
    }

    const { data } = await axios.get(
      `${variables.backendLink}/api/user/profile`,
      config
    );
    dispatch({
      type: GET_USER_PROFILE_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: GET_USER_PROFILE_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const updateUserProfile =
  (email, name) => async (dispatch, getState) => {
    try {
      dispatch({
        type: UPDATE_USER_PROFILE_REQUEST,
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
      const { data } = await axios.put(
        `${variables.backendLink}/api/user/profile-update`,
        { email, name },
        config
      );
      dispatch({
        type: UPDATE_USER_PROFILE_SUCCESS,
        payload: data,
      });
    } catch (error) {
      dispatch({
        type: UPDATE_USER_PROFILE_FAIL,
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      });
    }
  };

export const updateUserPassword =
  (currentPassword, password) => async (dispatch, getState) => {
    try {
      dispatch({
        type: UPDATE_USER_PASSWORD_REQUEST,
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
      const { data } = await axios.put(
        `${variables.backendLink}/api/user/password-update`,
        { currentPassword, password },
        config
      );
      dispatch({
        type: UPDATE_USER_PASSWORD_SUCCESS,
        payload: data,
      });
    } catch (error) {
      dispatch({
        type: UPDATE_USER_PASSWORD_FAIL,
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      });
    }
  };

export const SendVerificationAgain = (email) => async (dispatch) => {
  try {
    dispatch({
      type: USER_SEND_VERI_AGAIN_REQUEST,
    });
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    const { data } = await axios.post(
      `${variables.backendLink}/api/user/send-verification/again`,
      {
        email,
      },
      config
    );
    dispatch({
      type: USER_SEND_VERI_AGAIN_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: USER_SEND_VERI_AGAIN_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
