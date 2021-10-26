import { useSelector } from "react-redux";

import { Nav, Navbar, NavDropdown, Image } from "react-bootstrap";
import { BiLogIn } from "react-icons/bi";
import { SiGnuprivacyguard } from "react-icons/si";
import { FaUnlockAlt } from "react-icons/fa";

import { useDispatch } from "react-redux";

import { USER_LOGOUT } from "../constants/userConstants";

import { variables } from "../data/variables";

import { LinkContainer } from "react-router-bootstrap";
import { HashLink } from "react-router-hash-link";
import { plans } from "./plans/data";

const MyNavbar = () => {
  const { userInfo: user } = useSelector((state) => state.userLogin);

  const dispatch = useDispatch();

  const logoutHandler = () => {
    dispatch({
      type: USER_LOGOUT,
    });
    localStorage.clear();
  };

  return (
    <Navbar bg="light" expand="lg" className="my-navbar" collapseOnSelect>
      <LinkContainer to="/">
        <Image
          src={variables.rhymebetLogo}
          alt="Rhymebet Logo"
          width={150}
          height={30}
        />
      </LinkContainer>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mr-auto">
          <HashLink
            className="nav-link"
            title="Access free games"
            smooth
            to={"/#free"}
          >
            Free Games
          </HashLink>
          <NavDropdown title="Premium Games" id="collasible-nav-dropdown">
            <LinkContainer to="/subscription/testie">
              <NavDropdown.Item
                title={`Access To Premium Games For ${plans.testie.duration} Day`}
              >
                Testie Plan
              </NavDropdown.Item>
            </LinkContainer>
            <NavDropdown.Divider />
            <LinkContainer to="/subscription/noob">
              <NavDropdown.Item
                title={`Access To Premium Games For ${plans.noob.duration} Days`}
              >
                Noob Plan
              </NavDropdown.Item>
            </LinkContainer>
            <NavDropdown.Divider />
            <LinkContainer to="/subscription/basic">
              <NavDropdown.Item
                title={`Access To Premium Games For ${plans.basic.duration} Days`}
              >
                Basic Plan
              </NavDropdown.Item>
            </LinkContainer>
            <NavDropdown.Divider />
            <LinkContainer to="/subscription/standard">
              <NavDropdown.Item
                title={`Access To Premium Games For ${plans.standard.duration} Days`}
              >
                Standard Plan
              </NavDropdown.Item>
            </LinkContainer>
            <NavDropdown.Divider />
            <LinkContainer to="/subscription/gold">
              <NavDropdown.Item
                title={`Access To Premium Games For ${plans.gold.duration} Days`}
              >
                Gold Plan
              </NavDropdown.Item>
            </LinkContainer>
            <NavDropdown.Divider />
            {/* <NavDropdown.Item> */}
            <HashLink
              className="dropdown-item"
              title="View Premium games"
              smooth
              to={"/#premium"}
            >
              View Premium Games
            </HashLink>
            {/* </NavDropdown.Item> */}
          </NavDropdown>

          <NavDropdown title="Discover us" id="collasible-nav-dropdown">
            <LinkContainer to="/discover/about">
              <NavDropdown.Item title="Find more about us">
                About us
              </NavDropdown.Item>
            </LinkContainer>
            <NavDropdown.Divider />
            <LinkContainer to="/discover/contact">
              <NavDropdown.Item title="Contact us">Contact us</NavDropdown.Item>
            </LinkContainer>
            <NavDropdown.Divider />
            <LinkContainer to="/discover/faq">
              <NavDropdown.Item title="Discover some frequently asked questions">
                FAQ
              </NavDropdown.Item>
            </LinkContainer>
            <NavDropdown.Divider />
            <LinkContainer to="/discover/terms">
              <NavDropdown.Item title="Learn more about our terms and conditions">
                Terms and Conditions
              </NavDropdown.Item>
            </LinkContainer>

            <NavDropdown.Divider />
            <LinkContainer to="/discover/disclaimer">
              <NavDropdown.Item title="Learn more about what we don't do">
                Disclaimer
              </NavDropdown.Item>
            </LinkContainer>
          </NavDropdown>

          <HashLink
            className="nav-link"
            title="Rhymebet sports news"
            smooth
            to={"/#sportsnews"}
          >
            Sports News
          </HashLink>
        </Nav>
        <div className="flex-it">
          <Nav>
            {user && user.name ? (
              <>
                <NavDropdown
                  title={user.username}
                  id="collasible-nav-dropdown "
                  className="username"
                >
                  {/* <LinkContainer to="/user/dashboard">
                    <NavDropdown.Item
                      title={"Access " + user.name + " Dashboard"}
                    >
                      Dashboard
                    </NavDropdown.Item>
                  </LinkContainer> */}
                  {/* <LinkContainer to="/user/profile">
                    <NavDropdown.Item
                      title={"Access " + user.name + " Profile"}
                    >
                      Profile
                    </NavDropdown.Item>
                  </LinkContainer> */}
                  <NavDropdown.Divider />
                  <NavDropdown.Item
                    title={"Access " + user.name + " Profile"}
                    onClick={logoutHandler}
                    className="logout"
                  >
                    Logout
                  </NavDropdown.Item>
                </NavDropdown>
              </>
            ) : (
              <>
                <LinkContainer to="/login">
                  <Nav.Link title="Sign in">
                    <BiLogIn className="pr-1" size={20} />
                    Login
                  </Nav.Link>
                </LinkContainer>

                <LinkContainer to="/register">
                  <Nav.Link title="Register">
                    <SiGnuprivacyguard className="pr-1" size={20} />
                    Register
                  </Nav.Link>
                </LinkContainer>

                <LinkContainer to="/verify">
                  <Nav.Link title="Verify Account">
                    <FaUnlockAlt className="pr-1" size={18} />
                    Verify Account
                  </Nav.Link>
                </LinkContainer>
              </>
            )}
          </Nav>
          {user && user.isAdmin && (
            <Nav>
              <NavDropdown title="Admin" id="Admin-dropdown">
                <LinkContainer to="/admin/users">
                  <NavDropdown.Item title="Access all users">
                    Users
                  </NavDropdown.Item>
                </LinkContainer>
                <LinkContainer to="/admin/games">
                  <NavDropdown.Item title="Access all games">
                    Games
                  </NavDropdown.Item>
                </LinkContainer>
                <LinkContainer to="/admin/subscriptions">
                  <NavDropdown.Item title="Access all subscriptions">
                    Subscriptions
                  </NavDropdown.Item>
                </LinkContainer>
                <LinkContainer to="/admin/news">
                  <NavDropdown.Item title="Access all news">
                    News
                  </NavDropdown.Item>
                </LinkContainer>
              </NavDropdown>
            </Nav>
          )}
          {user && user.isSuperAdmin && (
            <Nav>
              <NavDropdown title="Super Admin" id="Super-Admin-dropdown">
                <LinkContainer to="/superadmin/users">
                  <NavDropdown.Item title="Access all users">
                    Users
                  </NavDropdown.Item>
                </LinkContainer>
                <LinkContainer to="/superadmin/subscriptions">
                  <NavDropdown.Item title="Access all subscriptions">
                    Subscriptions
                  </NavDropdown.Item>
                </LinkContainer>
              </NavDropdown>
            </Nav>
          )}
        </div>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default MyNavbar;
