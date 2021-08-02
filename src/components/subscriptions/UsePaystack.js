import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { usePaystackPayment } from "react-paystack";

import {
  getPaystackConfig,
  confirmPaystackPayment,
} from "../../actions/subscriptionActions";

export const UsePaystack = ({ amount, plan }) => {
  const dispatch = useDispatch();

  const [email, setEmail] = useState("");
  const [publicKey, setPublicKey] = useState("");

  const { success, serverReply, error } = useSelector(
    (state) => state.paystackConfigGet
  );

  // eslint-disable-next-line
  const {
    success: confirmSuccess,
    serverReply: confirmServerReply,
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
      confirmPaystackPayment({ ...reference, amount: amount / 100, plan })
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
        <button
          onClick={() => {
            initializePayment(onSuccess, onClose);
          }}
          className="mb-2 mt-5 button-block wide-block bg-blue color-white mx-auto"
        >
          Make Secure Payment
        </button>
      </div>
    );
  };

  return <Paystack />;
};
