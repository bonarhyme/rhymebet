import {
  GET_ALL_USERS_REQUEST,
  GET_ALL_USERS_SUCCESS,
  GET_ALL_USERS_FAIL,
} from "../constants/adminConstants";

import { USER_LOGOUT } from "../constants/userConstants";

export const getAllUsersReducer = (state = {}, action) => {
  switch (action.type) {
    case GET_ALL_USERS_REQUEST:
      return {
        loading: true,
      };

    case GET_ALL_USERS_SUCCESS:
      return {
        loading: false,
        success: true,
        serverReply: action.payload,
      };
    case GET_ALL_USERS_FAIL:
      return { loading: false, success: false, error: action.payload };
    case USER_LOGOUT:
      return {};
    default:
      return state;
  }
};
