import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { usePaystackPayment } from "react-paystack";

import { getPaystackConfig } from "../../actions/subscriptionActions";

export const UsePaystack = ({ amount }) => {
  const dispatch = useDispatch();

  const [email, setEmail] = useState("");
  const [publicKey, setPublicKey] = useState("");

  const { success, serverReply, error } = useSelector(
    (state) => state.paystackConfigGet
  );

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

  // you can call this function anything
  const onSuccess = (reference) => {
    // Implementation for whatever you want to do with reference and after success call.
    console.log(reference);
  };

  // you can call this function anything
  const onClose = () => {
    // implementation for  whatever you want to do when the Paystack dialog closed.
    console.log("closed");
  };

  const PaystackHookExample = () => {
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

  return <PaystackHookExample />;
};
