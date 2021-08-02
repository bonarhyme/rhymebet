import axios from "axios";

import {
  GET_PAYSTACK_CONFIG_REQUEST,
  GET_PAYSTACK_CONFIG_SUCCESS,
  GET_PAYSTACK_CONFIG_FAIL,
  CONFIRM_PAYSTACK_PAYMENT_REQUEST,
  CONFIRM_PAYSTACK_PAYMENT_SUCCESS,
  CONFIRM_PAYSTACK_PAYMENT_FAIL,
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

export const confirmPaystackPayment =
  (result) => async (dispatch, getState) => {
    try {
      dispatch({
        type: CONFIRM_PAYSTACK_PAYMENT_REQUEST,
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

      const { data } = await axios.post(
        `${variables.backendLink}/api/subscriptions/confirm`,
        result,
        config
      );

      dispatch({
        type: CONFIRM_PAYSTACK_PAYMENT_SUCCESS,
        payload: data,
      });
    } catch (error) {
      dispatch({
        type: CONFIRM_PAYSTACK_PAYMENT_FAIL,
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      });
    }
  };
