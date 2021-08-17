import React, { useState } from "react";
import { Alert, Button } from "react-bootstrap";
import { FaTimes } from "react-icons/fa";

const MessageTwo = ({ variant, children }) => {
  const [show, setShow] = useState(true);

  return (
    <Alert
      show={show}
      variant={variant}
      onClose={() => setShow(false)}
      className="d-flex align-items-center space-between"
    >
      {children}
      <div className="d-flex justify-content-end">
        <Button variant="outline-danger" onClick={() => setShow(false)}>
          <FaTimes size={20} color="red" />
        </Button>
      </div>
    </Alert>
  );
};

MessageTwo.defaultProps = {
  variant: "info",
};

export default MessageTwo;
