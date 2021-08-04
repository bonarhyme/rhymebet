import React from "react";
import { Button } from "react-bootstrap";

const MyButton = ({
  text = "Submit",
  className,
  type = "submit",
  handleclick,
  disabled = false,
}) => {
  return (
    <Button
      variant="outline-info"
      type={type}
      className={`button-block d-block mx-auto mt-2 ${className}`}
      handleclick={handleclick}
      disabled={disabled}
    >
      {text}
    </Button>
  );
};

export default MyButton;
