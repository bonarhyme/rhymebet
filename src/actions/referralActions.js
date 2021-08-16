import axios from "axios";

import { variables } from "../data/variables";

import {
  GET_USER_REFS_REQUEST,
  GET_USER_REFS_SUCCESS,
  GET_USER_REFS_FAIL,
} from "../constants/referralConstants";

export const getUserRefs = (pageNumber) => async (dispatch, getState) => {
  try {
    dispatch({
      type: GET_USER_REFS_REQUEST,
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
      `${variables.backendLink}/api/referral/user/all/:id/?pageNumber=${pageNumber}`,
      config
    );

    dispatch({
      type: GET_USER_REFS_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: GET_USER_REFS_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
