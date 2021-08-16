import {
  GET_USER_REFS_REQUEST,
  GET_USER_REFS_SUCCESS,
  GET_USER_REFS_FAIL,
} from "../constants/referralConstants";

export const getUserRefsReducer = (state = {}, action) => {
  switch (action.type) {
    case GET_USER_REFS_REQUEST:
      return {
        loading: true,
      };

    case GET_USER_REFS_SUCCESS:
      return {
        loading: false,
        success: true,
        serverReply: action.payload,
      };
    case GET_USER_REFS_FAIL:
      return { loading: false, success: false, error: action.payload };
    default:
      return state;
  }
};
