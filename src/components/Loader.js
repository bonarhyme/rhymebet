import React from "react";
import { Spinner } from "react-bootstrap";

const Loader = ({ animation = "border" }) => {
  return (
    <Spinner
      animation={animation}
      role="status"
      style={{
        width: "100px",
        height: "100px",
        margin: "auto",
        display: "block",
      }}
    >
      {/* <span className="sr-only">Loading...</span> */}
    </Spinner>
  );
};

export default Loader;
