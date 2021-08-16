import axios from "axios";
import { variables } from "../data/variables";
import {
  SUPER_GET_REGULAR_USERS_REQUEST,
  SUPER_GET_REGULAR_USERS_SUCCESS,
  SUPER_GET_REGULAR_USERS_FAIL,
  SUPER_MAKE_USER_ADMIN_REQUEST,
  SUPER_MAKE_USER_ADMIN_SUCCESS,
  SUPER_MAKE_USER_ADMIN_FAIL,
  SUPER_GET_ADMIN_USERS_REQUEST,
  SUPER_GET_ADMIN_USERS_SUCCESS,
  SUPER_GET_ADMIN_USERS_FAIL,
} from "../constants/superAdminConstants";

export const getRegularUsers = (pageNumber) => async (dispatch, getState) => {
  try {
    dispatch({
      type: SUPER_GET_REGULAR_USERS_REQUEST,
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

    const { data } = await axios.get(
      `${variables.backendLink}/api/super-admin/users/regular/?pageNumber=${pageNumber}`,
      config
    );

    dispatch({
      type: SUPER_GET_REGULAR_USERS_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: SUPER_GET_REGULAR_USERS_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const getAdminUsers = (pageNumber) => async (dispatch, getState) => {
  try {
    dispatch({
      type: SUPER_GET_ADMIN_USERS_REQUEST,
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

    const { data } = await axios.get(
      `${variables.backendLink}/api/super-admin/users/admin/?pageNumber=${pageNumber}`,
      config
    );

    dispatch({
      type: SUPER_GET_ADMIN_USERS_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: SUPER_GET_ADMIN_USERS_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const makeAdmin = (id) => async (dispatch, getState) => {
  try {
    dispatch({
      type: SUPER_MAKE_USER_ADMIN_REQUEST,
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
      `${variables.backendLink}/api/super-admin/users/regular/${id}`,
      "",
      config
    );

    dispatch({
      type: SUPER_MAKE_USER_ADMIN_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: SUPER_MAKE_USER_ADMIN_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
