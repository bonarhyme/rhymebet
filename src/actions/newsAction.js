import {
  CREATE_NEWS_REQUEST,
  CREATE_NEWS_SUCCESS,
  CREATE_NEWS_FAIL,
  GET_ALL_NEWS_REQUEST,
  GET_ALL_NEWS_SUCCESS,
  GET_ALL_NEWS_FAIL,
} from "../constants/newsConstants";
import axios from "axios";
import { variables } from "../data/variables";

export const createNews =
  (title, fullStory, images) => async (dispatch, getState) => {
    try {
      dispatch({
        type: CREATE_NEWS_REQUEST,
      });
      const {
        userLogin: { userInfo },
      } = getState();

      const config = {
        headers: {
          Accept: "application/json",
          "Content-Type": "multipart/form-data",
          Authorization: `Bearer ${userInfo.token}`,
        },
      };
      const fData = new FormData();
      fData.append("title", title);
      fData.append("fullStory", fullStory);
      // fData.append("image", images);
      images.forEach((image, index) => {
        fData.append("image", image);
      });

      const { data } = await axios.post(
        `${variables.backendLink}/api/news/create`,
        fData,
        config
      );

      dispatch({
        type: CREATE_NEWS_SUCCESS,
        payload: data,
      });
    } catch (error) {
      dispatch({
        type: CREATE_NEWS_FAIL,
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      });
    }
  };

export const getAllNews = (pageNumber) => async (dispatch) => {
  try {
    dispatch({
      type: GET_ALL_NEWS_REQUEST,
    });

    const { data } = await axios.get(
      `${variables.backendLink}/api/news/all/?pageNumber=${pageNumber}`
    );

    dispatch({
      type: GET_ALL_NEWS_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: GET_ALL_NEWS_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
