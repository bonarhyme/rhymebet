import React from "react";
import { Button } from "react-bootstrap";

const MyButton = ({ text = "Submit" }) => {
  return (
    <Button
      variant="outline-info"
      type="submit"
      className="button-block d-block mx-auto mt-2"
    >
      {text}
    </Button>
  );
};

export default MyButton;
