import {
  GET_PAYSTACK_CONFIG_REQUEST,
  GET_PAYSTACK_CONFIG_SUCCESS,
  GET_PAYSTACK_CONFIG_FAIL,
} from "../constants/subscriptionConstants";

export const getPaystackConfigReducer = (state = {}, action) => {
  switch (action.type) {
    case GET_PAYSTACK_CONFIG_REQUEST:
      return {
        loading: true,
      };

    case GET_PAYSTACK_CONFIG_SUCCESS:
      return {
        loading: false,
        success: true,
        serverReply: action.payload,
      };
    case GET_PAYSTACK_CONFIG_FAIL:
      return { loading: false, success: false, error: action.payload };
    default:
      return state;
  }
};
