import {
  CREATE_NEWS_REQUEST,
  CREATE_NEWS_SUCCESS,
  CREATE_NEWS_FAIL,
  GET_ALL_NEWS_REQUEST,
  GET_ALL_NEWS_SUCCESS,
  GET_ALL_NEWS_FAIL,
  GET_SINGLE_NEWS_REQUEST,
  GET_SINGLE_NEWS_SUCCESS,
  GET_SINGLE_NEWS_FAIL,
  CREATE_COMMENT_REQUEST,
  CREATE_COMMENT_SUCCESS,
  CREATE_COMMENT_FAIL,
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
    default:
      return state;
  }
};

export const getSingleNewsReducer = (state = {}, action) => {
  switch (action.type) {
    case GET_SINGLE_NEWS_REQUEST:
      return {
        loading: true,
      };

    case GET_SINGLE_NEWS_SUCCESS:
      return {
        loading: false,
        success: true,
        serverReply: action.payload,
      };
    case GET_SINGLE_NEWS_FAIL:
      return { loading: false, success: false, error: action.payload };

    default:
      return state;
  }
};

export const createCommentReducer = (state = {}, action) => {
  switch (action.type) {
    case CREATE_COMMENT_REQUEST:
      return {
        loading: true,
      };

    case CREATE_COMMENT_SUCCESS:
      return {
        loading: false,
        success: true,
        serverReply: action.payload,
      };
    case CREATE_COMMENT_FAIL:
      return { loading: false, success: false, error: action.payload };
    case USER_LOGOUT:
      return {};
    default:
      return state;
  }
};
