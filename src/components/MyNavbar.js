import { useState } from "react";
import { Nav, Navbar, NavDropdown, Image } from "react-bootstrap";
import { BiLogIn } from "react-icons/bi";
import { SiGnuprivacyguard } from "react-icons/si";
import { FaUnlockAlt } from "react-icons/fa";

import { variables } from "../data/variables";

import { LinkContainer } from "react-router-bootstrap";

const MyNavbar = () => {
  // eslint-disable-next-line
  const [user, setUser] = useState({});
  return (
    <Navbar bg="light" expand="lg" className="my-navbar" collapseOnSelect>
      <LinkContainer to="/">
        <Image src={variables.rhymebetLogo} alt="Rhymebet Logo" width={150} />
      </LinkContainer>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mr-auto">
          <LinkContainer to="/#free">
            <Nav.Link title="Access free games">Free Games</Nav.Link>
          </LinkContainer>
          <NavDropdown title="Premium Games" id="collasible-nav-dropdown">
            <LinkContainer to="/subscription/basic">
              <NavDropdown.Item title="Access 1.5 odds for 3 days">
                Basic Plan
              </NavDropdown.Item>
            </LinkContainer>
            <NavDropdown.Divider />
            <LinkContainer to="/subscription/standard">
              <NavDropdown.Item title="Access 2 odds for 7 days">
                Standard Plan
              </NavDropdown.Item>
            </LinkContainer>
            <NavDropdown.Divider />
            <LinkContainer to="/subscription/gold">
              <NavDropdown.Item title="Access 3 odds for 14 days">
                Gold Plan
              </NavDropdown.Item>
            </LinkContainer>
          </NavDropdown>

          <NavDropdown title="Discover us" id="collasible-nav-dropdown">
            <LinkContainer to="/discover/about">
              <NavDropdown.Item title="Find more about us">
                About us
              </NavDropdown.Item>
            </LinkContainer>
            <NavDropdown.Divider />
            <LinkContainer to="/discover/faq">
              <NavDropdown.Item title="Discover some frequently asked questions">
                FAQ
              </NavDropdown.Item>
            </LinkContainer>
            <NavDropdown.Divider />
            <LinkContainer to="/discover/policy">
              <NavDropdown.Item title="Learn more about our policies">
                Our Policy
              </NavDropdown.Item>
            </LinkContainer>

            <NavDropdown.Divider />
            <LinkContainer to="/discover/disclaimer">
              <NavDropdown.Item title="Learn more about what we don't do">
                Disclaimer
              </NavDropdown.Item>
            </LinkContainer>
          </NavDropdown>
          <LinkContainer to="/sportsnews">
            <Nav.Link title="Rhymebet sports news">Sports News</Nav.Link>
          </LinkContainer>
        </Nav>
        <Nav>
          {user && user.name ? (
            <>
              <NavDropdown title={user.name} id="collasible-nav-dropdown">
                <LinkContainer to="/user/dashboard">
                  <NavDropdown.Item
                    title={"Access " + user.name + " Dashboard"}
                  >
                    Dashboard
                  </NavDropdown.Item>
                </LinkContainer>
                <LinkContainer to="/user/profile">
                  <NavDropdown.Item title={"Access " + user.name + " Profile"}>
                    Profile
                  </NavDropdown.Item>
                </LinkContainer>
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
      </Navbar.Collapse>
    </Navbar>
  );
};

export default MyNavbar;
