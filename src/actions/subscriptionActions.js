import axios from "axios";

import {
  GET_PAYSTACK_CONFIG_REQUEST,
  GET_PAYSTACK_CONFIG_SUCCESS,
  GET_PAYSTACK_CONFIG_FAIL,
} from "../constants/subscriptionConstants";
import { variables } from "../data/variables";

export const getPaystackConfig = () => async (dispatch) => {
  try {
    dispatch({
      type: GET_PAYSTACK_CONFIG_REQUEST,
    });

    const { data } = await axios.get(
      `${variables.backendLink}/api/subscriptions/paystack/config`
    );

    dispatch({
      type: GET_PAYSTACK_CONFIG_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: GET_PAYSTACK_CONFIG_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
