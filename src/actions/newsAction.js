import {
  CREATE_NEWS_REQUEST,
  CREATE_NEWS_SUCCESS,
  CREATE_NEWS_FAIL,
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
      images.forEach((image, index) => {
        fData.append("image", {
          name: "image" + index,
          //   type: "image/*",
          uri: image,
        });
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
