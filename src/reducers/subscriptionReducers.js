import {
  GET_PAYSTACK_CONFIG_REQUEST,
  GET_PAYSTACK_CONFIG_SUCCESS,
  GET_PAYSTACK_CONFIG_FAIL,
  CONFIRM_PAYSTACK_PAYMENT_REQUEST,
  CONFIRM_PAYSTACK_PAYMENT_SUCCESS,
  CONFIRM_PAYSTACK_PAYMENT_FAIL,
  GET_ACTIVE_SUBSCRIPTIONS_REQUEST,
  GET_ACTIVE_SUBSCRIPTIONS_SUCCESS,
  GET_ACTIVE_SUBSCRIPTIONS_FAIL,
  GET_ACTIVE_SINGLE_SUB_REQUEST,
  GET_ACTIVE_SINGLE_SUB_SUCCESS,
  GET_ACTIVE_SINGLE_SUB_FAIL,
  GET_ALL_SUB_REQUEST,
  GET_ALL_SUB_SUCCESS,
  GET_ALL_SUB_FAIL,
  GET_USER_ALL_REQUEST,
  GET_USER_ALL_SUCCESS,
  GET_USER_ALL_FAIL,
} from "../constants/subscriptionConstants";
import { USER_LOGOUT } from "../constants/userConstants";

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

export const confirmPaystackPaymentReducer = (state = {}, action) => {
  switch (action.type) {
    case CONFIRM_PAYSTACK_PAYMENT_REQUEST:
      return {
        loading: true,
      };

    case CONFIRM_PAYSTACK_PAYMENT_SUCCESS:
      return {
        loading: false,
        success: true,
        serverReply: action.payload,
      };
    case CONFIRM_PAYSTACK_PAYMENT_FAIL:
      return { loading: false, success: false, error: action.payload };
    default:
      return state;
  }
};

export const getActiveSubscriptionsReducer = (state = {}, action) => {
  switch (action.type) {
    case GET_ACTIVE_SUBSCRIPTIONS_REQUEST:
      return {
        loading: true,
      };

    case GET_ACTIVE_SUBSCRIPTIONS_SUCCESS:
      return {
        loading: false,
        success: true,
        serverReply: action.payload,
      };
    case GET_ACTIVE_SUBSCRIPTIONS_FAIL:
      return { loading: false, success: false, error: action.payload };
    case USER_LOGOUT:
      return {};
    default:
      return state;
  }
};

export const getActiveSingleSubReducer = (state = {}, action) => {
  switch (action.type) {
    case GET_ACTIVE_SINGLE_SUB_REQUEST:
      return {
        loading: true,
      };

    case GET_ACTIVE_SINGLE_SUB_SUCCESS:
      return {
        loading: false,
        success: true,
        serverReply: action.payload,
      };
    case GET_ACTIVE_SINGLE_SUB_FAIL:
      return { loading: false, success: false, error: action.payload };
    case USER_LOGOUT:
      return {};
    default:
      return state;
  }
};

export const getAllSubReducer = (state = {}, action) => {
  switch (action.type) {
    case GET_ALL_SUB_REQUEST:
      return {
        loading: true,
      };

    case GET_ALL_SUB_SUCCESS:
      return {
        loading: false,
        success: true,
        serverReply: action.payload,
      };
    case GET_ALL_SUB_FAIL:
      return { loading: false, success: false, error: action.payload };
    case USER_LOGOUT:
      return {};
    default:
      return state;
  }
};

export const getUserAllSubReducer = (state = {}, action) => {
  switch (action.type) {
    case GET_USER_ALL_REQUEST:
      return {
        loading: true,
      };

    case GET_USER_ALL_SUCCESS:
      return {
        loading: false,
        success: true,
        serverReply: action.payload,
      };
    case GET_USER_ALL_FAIL:
      return { loading: false, success: false, error: action.payload };
    case USER_LOGOUT:
      return {};
    default:
      return state;
  }
};
