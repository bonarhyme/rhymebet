import React from "react";
import { Spinner } from "react-bootstrap";

const LoaderTwo = ({ animation = "grow" }) => {
  return (
    <Spinner
      animation={animation}
      role="status"
      style={{
        width: "30px",
        height: "30px",
        margin: "auto",
        display: "block",
      }}
    >
      <span className="sr-only">Loading...</span>
    </Spinner>
  );
};

export default LoaderTwo;
