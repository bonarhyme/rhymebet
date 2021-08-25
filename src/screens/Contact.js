import React from "react";
import { Helmet } from "react-helmet";
import {
  FaEnvelopeSquare,
  FaInstagramSquare,
  FaPhoneSquare,
} from "react-icons/fa";
import { variables } from "../data/variables";

const Contact = () => {
  return (
    <main className="contact ">
      <Helmet>
        <title>Contact Us - Rhymebet</title>
        <meta name="description" content="Contact Rhymebet" />
      </Helmet>
      <div>
        <h1 className="main-header">Contact Us</h1>
        <div className="contact-container p-2 ">
          <div>
            <a href="tel:+2349060272486">
              <FaPhoneSquare size={60} />
            </a>
            <p>{variables.phoneNumber}</p>
          </div>
          <div>
            <a
              href="https://instagram.com/rhymebet_support"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagramSquare size={60} color="gold" />
            </a>
            <p>{variables.instagramHandle}</p>
          </div>
          <div>
            <a href="mailto:rhymebet_support@outlook.com">
              <FaEnvelopeSquare size={60} />
            </a>
            <p>{variables.email}</p>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Contact;
