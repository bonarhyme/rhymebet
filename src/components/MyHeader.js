import { useSelector } from "react-redux";

import { Container } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import ShortFreeGames from "./games/ShortFreeGames";

const MyHeader = () => {
  const { userInfo: user } = useSelector((state) => state.userLogin);
  return (
    <header className="header-background">
      <Container className="p-5 header-container" fluid>
        <div className="header-content">
          <h1 className="main-header">Welcome to Rhymebet</h1>
          <em>Home of premium and free football tips and predictions</em>
          {!user ? (
            <div className="d-block mx-auto my-3">
              <LinkContainer to="/login">
                <button className="mr-2 mt-5 button-block wide-block bg-blue color-white mx-auto">
                  Login
                </button>
              </LinkContainer>
              <LinkContainer to="/register">
                <button className="mt-1 button-block wide-block bg-green color-white mx-auto">
                  Register
                </button>
              </LinkContainer>
              <LinkContainer to="/verify">
                <button className="mt-1 button-block wide-block bg-ash color-white mx-auto">
                  VERIFY ACCOUNT
                </button>
              </LinkContainer>
            </div>
          ) : (
            <>
              <div className="d-block mx-auto my-3">
                <h2>Hello, {user.name && user.name}</h2>
                <LinkContainer to="/user/dashboard">
                  <button className=" mt-5 button-block wide-block bg-blue color-white mx-auto">
                    View Dashboard
                  </button>
                </LinkContainer>
                <LinkContainer to="/user/profile">
                  <button className="mt-1 button-block wide-block bg-green color-white mx-auto">
                    View Profile
                  </button>
                </LinkContainer>
              </div>
            </>
          )}
        </div>
        <div className="fancy-header header-content margin-top">
          <ShortFreeGames />
        </div>
      </Container>
    </header>
  );
};

export default MyHeader;
