import React from "react";
import { useSelector } from "react-redux";

import { Container } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import ShortFreeGames from "./games/ShortFreeGames";
import { HashLink } from "react-router-hash-link";
// import { getUserProfile } from "../actions/userActions";

const MyHeader = () => {
  // const dispatch = useDispatch();
  const { profile: user } = useSelector((state) => state.userProfile);

  // const { userInfo } = useSelector((state) => state.userLogin);
  // useEffect(() => {
  //   if (userInfo) {
  //     dispatch(getUserProfile());
  //   }
  //   // eslint-disable-next-line
  // }, [userInfo]);
  return (
    <header className="header-background">
      <Container className="pt-5 mb-5 header-container" fluid>
        <div className="header-content py-5">
          <h1 className="main-header-2">Welcome to Rhymebet</h1>
          <em
            className="text-center"
            style={{
              fontSize: "1.3rem",
              display: "block",
              marginRight: "auto",
              marginLeft: "auto",
              paddingLeft: "1rem",
              paddingRight: "1rem",
            }}
          >
            Home of premium and free football tips and predictions
          </em>
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
              <HashLink
                className="anchor"
                title="Access free games"
                smooth
                to={"/#free"}
              >
                <button className="mt-1 button-block wide-block bg-ash color-white mx-auto">
                  View Free Predictions
                </button>
              </HashLink>
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
                <HashLink
                  className="anchor"
                  title="Access free games"
                  smooth
                  to={"/#free"}
                >
                  <button className="mt-1  button-block wide-block bg-ash color-white mx-auto">
                    View Free Predictions
                  </button>
                </HashLink>
              </div>
            </>
          )}
        </div>
        <div className="fancy-header header-content margin-top py-5">
          <ShortFreeGames />
        </div>
      </Container>
    </header>
  );
};

export default MyHeader;
