import {
  CREATE_NEWS_REQUEST,
  CREATE_NEWS_SUCCESS,
  CREATE_NEWS_FAIL,
  GET_ALL_NEWS_REQUEST,
  GET_ALL_NEWS_SUCCESS,
  GET_ALL_NEWS_FAIL,
} from "../constants/newsConstants";

import { USER_LOGOUT } from "../constants/userConstants";

export const createNewsReducer = (state = {}, action) => {
  switch (action.type) {
    case CREATE_NEWS_REQUEST:
      return {
        loading: true,
      };

    case CREATE_NEWS_SUCCESS:
      return {
        loading: false,
        success: true,
        serverReply: action.payload,
      };
    case CREATE_NEWS_FAIL:
      return { loading: false, success: false, error: action.payload };
    case USER_LOGOUT:
      return {};
    default:
      return state;
  }
};

export const getAllNewsReducer = (state = {}, action) => {
  switch (action.type) {
    case GET_ALL_NEWS_REQUEST:
      return {
        loading: true,
      };

    case GET_ALL_NEWS_SUCCESS:
      return {
        loading: false,
        success: true,
        serverReply: action.payload,
      };
    case GET_ALL_NEWS_FAIL:
      return { loading: false, success: false, error: action.payload };
    case USER_LOGOUT:
      return {};
    default:
      return state;
  }
};
