import axios from "axios";
import { variables } from "../data/variables";
import {
  SUPER_GET_REGULAR_USERS_REQUEST,
  SUPER_GET_REGULAR_USERS_SUCCESS,
  SUPER_GET_REGULAR_USERS_FAIL,
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
