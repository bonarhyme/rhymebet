import React from "react";
import { Container } from "react-bootstrap";
import { FaSearch } from "react-icons/fa";

const PageNotFound = () => {
  console.log(window.location.href);
  return (
    <Container>
      <h1>Smart</h1>
      <FaSearch size={150} />
    </Container>
  );
};

export default PageNotFound;
