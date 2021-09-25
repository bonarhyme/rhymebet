import React from "react";
import { LinkContainer } from "react-router-bootstrap";

import {
  FaPhoneSquare,
  FaInstagramSquare,
  FaEnvelopeSquare,
} from "react-icons/fa";

import { variables } from "../data/variables";
import parentLogo from "../images/parent-logo.PNG";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-links-container container-fluid">
        <LinkContainer to="/">
          <img
            src={variables.rhymebetLogo}
            alt="Rhymebet Logo"
            className="responsive-image"
            width={150}
            height="auto"
          />
        </LinkContainer>
        <div>
          <h2 className="main-header">Contact us</h2>
          <ul className="footer-ul">
            <li>
              <a href="tel:+2349060272486">
                <FaPhoneSquare size={40} />
              </a>
              <strong>{variables.phoneNumber}</strong>
            </li>
            <li>
              <a
                href="https://instagram.com/rhymebet_support"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaInstagramSquare size={40} color="gold" />
              </a>
              <strong>{variables.instagramHandle}</strong>
            </li>
            <li>
              <a href="mailto:rhymebet_support@outlook.com">
                <FaEnvelopeSquare size={40} />
              </a>
              <strong>{variables.email}</strong>
            </li>
          </ul>
        </div>
        <div>
          <h2 className="main-header">Useful Links</h2>
          <ul className="useful-links footer-ul">
            <LinkContainer to="/discover/about">
              <li title="Find more about us">About Us</li>
            </LinkContainer>
            <LinkContainer to="/discover/faq">
              <li title="Discover some frequently asked questions"> FAQ</li>
            </LinkContainer>
            <LinkContainer to="/discover/terms">
              <li title="Learn more about our terms and conditions">
                Terms and Conditions
              </li>
            </LinkContainer>
            <LinkContainer to="/discover/disclaimer">
              <li title="Learn more about what we don't do"> Disclaimer</li>
            </LinkContainer>
            <LinkContainer to="/sportsnews">
              <li title="Rhymebet sports news"> Sports News</li>
            </LinkContainer>
          </ul>
        </div>
      </div>
      <div className="copyright color-blue">
        Disclaimer: All our tips and predictions are solely from in house
        analysis, we do not sell fixed matches or associate with people that do
        so. We cannot be held responsible for your loss of money playing our
        free or premium games.
      </div>
      <div className="copyright pt-2 ">
        Rhymebet - Copyright &copy; 2021 - {new Date().getFullYear()}. All
        rights reserved.
      </div>
      {/* <hr /> */}
      <div className="copyright pt-2">
        <strong>Rhymebet is a subsidiary of</strong>
        <img
          src={parentLogo}
          alt="Bonarhyme Tech Hub logo"
          width="200"
          height="200"
          style={{ objectFit: "contain" }}
        />
      </div>
    </footer>
  );
};

export default Footer;
