import { useState } from "react";
import { Container } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import ShortFreeGames from "./games/ShortFreeGames";

const MyHeader = () => {
  const [user, setUser] = useState({});
  return (
    <header className="header-background">
      <Container className="p-5 header-container" fluid>
        <div className="header-content">
          <h1 className="main-header">Welcome to Rhymebet</h1>
          <em>Home of premium and free football tips and predictions</em>
          {!user.name ? (
            <div className="d-block mx-auto my-3">
              <LinkContainer to="/login">
                <button className="mr-2 mt-5 button-block wide-block bg-blue color-white">
                  Login
                </button>
              </LinkContainer>
              <LinkContainer to="/register">
                <button className="mt-1 button-block wide-block bg-green color-white">
                  Register
                </button>
              </LinkContainer>
              <LinkContainer to="/verify">
                <button className="mt-1 button-block wide-block bg-ash color-white">
                  VERIFY ACCOUNT
                </button>
              </LinkContainer>
            </div>
          ) : (
            <>
              <div className="d-block mx-auto my-3">
                <h2>Hello, {user.name && user.name}</h2>
                <LinkContainer to="/dashboard">
                  <button className="mr-2 mt-5 button-block wide-block bg-blue color-white">
                    View Dashboard
                  </button>
                </LinkContainer>
              </div>
            </>
          )}
        </div>
        <div className="fancy-header header-content">
          <ShortFreeGames />
        </div>
      </Container>
    </header>
  );
};

export default MyHeader;
