import { usePaystackPayment } from "react-paystack";

export const UsePaystack = () => {
  const config = {
    reference: new Date().getTime().toString(),
    email: "bonarhyme@protonmail.com",
    amount: 20000,
    publicKey: "pk_test_e59723a0403a7fe619c62c88b775e394fe471f69",
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
