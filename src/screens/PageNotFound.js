import React from "react";
import { Container } from "react-bootstrap";
import { FaSearch } from "react-icons/fa";
import { LinkContainer } from "react-router-bootstrap";
import { Helmet } from "react-helmet";

const PageNotFound = () => {
  return (
    <Container>
      <main className="page-not-found">
        <Helmet>
          <title>Page Not Found - Rhymebet</title>
          <meta name="description" content="Page Not Found" />
        </Helmet>
        <div className="center-all">
          <h1 className="py-5 color-red">Oooopssss!!! Page Not Found!</h1>
          <FaSearch size={150} className="shake" />
          <p className="small-font">
            The link below does not exist in our site:
          </p>
          <p className="color-red ">{window.location.href}</p>
          <LinkContainer to="/">
            <button className="button-fancy box-shadow-white letter-space-big">
              Go Back Home
            </button>
          </LinkContainer>
        </div>
      </main>
    </Container>
  );
};

export default PageNotFound;
