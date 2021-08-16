import {
  SUPER_GET_REGULAR_USERS_REQUEST,
  SUPER_GET_REGULAR_USERS_SUCCESS,
  SUPER_GET_REGULAR_USERS_FAIL,
} from "../constants/superAdminConstants";
import { USER_LOGOUT } from "../constants/userConstants";

export const getRegularUsersReducer = (state = {}, action) => {
  switch (action.type) {
    case SUPER_GET_REGULAR_USERS_REQUEST:
      return {
        loading: true,
      };

    case SUPER_GET_REGULAR_USERS_SUCCESS:
      return {
        loading: false,
        success: true,
        serverReply: action.payload,
      };
    case SUPER_GET_REGULAR_USERS_FAIL:
      return { loading: false, success: false, error: action.payload };
    case USER_LOGOUT:
      return {};
    default:
      return state;
  }
};
