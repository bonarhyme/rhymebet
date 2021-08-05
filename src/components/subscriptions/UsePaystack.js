import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { usePaystackPayment } from "react-paystack";

import {
  getPaystackConfig,
  confirmPaystackPayment,
} from "../../actions/subscriptionActions";
import { LinkContainer } from "react-router-bootstrap";

export const UsePaystack = ({ amount, plan, duration, hidden = false }) => {
  const dispatch = useDispatch();

  const { userInfo } = useSelector((state) => state.userLogin);

  const [email, setEmail] = useState("");
  const [publicKey, setPublicKey] = useState("");

  const { success, serverReply, error } = useSelector(
    (state) => state.paystackConfigGet
  );

  // eslint-disable-next-line
  const {
    // eslint-disable-next-line
    success: confirmSuccess,
    // eslint-disable-next-line
    serverReply: confirmServerReply,
    // eslint-disable-next-line
    error: confirmError,
  } = useSelector((state) => state.paystackPaymentConfirm);

  useEffect(() => {
    dispatch(getPaystackConfig());
    // eslint-disable-next-line
  }, [dispatch, error]);

  useEffect(() => {
    if (serverReply) {
      setEmail(serverReply.email);
      setPublicKey(serverReply.publicKey);
    }
    // eslint-disable-next-line
  }, [success]);

  const config = {
    reference: new Date().getTime().toString(),
    email,
    amount,
    publicKey,
  };

  const onSuccess = (reference) => {
    dispatch(
      confirmPaystackPayment({
        ...reference,
        amount: amount / 100,
        plan,
        duration,
      })
    );
    // console.log({ ...reference, amount: amount / 100, plan });
  };

  const onClose = () => {
    window.alert("Transaction cancelled.");
  };

  const Paystack = () => {
    const initializePayment = usePaystackPayment(config);
    return (
      <div>
        {userInfo && userInfo.username ? (
          <button
            onClick={() => {
              initializePayment(onSuccess, onClose);
            }}
            className={`mb-2 mt-5 button-block wide-block bg-blue color-white mx-auto blur-button-bg ${
              hidden && `bg-ash`
            }`}
            style={{ cursor: hidden ? "not-allowed" : "pointer" }}
            disabled={hidden}
          >
            Make Secure Payment
          </button>
        ) : (
          <LinkContainer to="/login">
            <button
              className="mb-2 mt-5 button-block wide-block bg-blue color-white mx-auto blur-button-bg"
              style={{ cursor: "pointer" }}
            >
              Make Secure Payment
            </button>
          </LinkContainer>
        )}
      </div>
    );
  };

  return <Paystack />;
};
