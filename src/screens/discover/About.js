import React from "react";
import { Helmet } from "react-helmet";

const About = () => {
  return (
    <main>
      <Helmet>
        <title>About Us - Rhymebet</title>
        <meta name="description" content="About rhymebet" />
      </Helmet>
      <h1 className="main-header">About Us</h1>
      <article>
        <p className="discover-paragraph">
          <strong>rhymebet.com</strong> is a subsidiary of{" "}
          <b>Bonarhyme Tech Hub</b>, that provides premium and free football
          predictions and tips based on extensive studies and analysis of teams
          forms by our in-house experts.{" "}
        </p>
        <p className="discover-paragraph my-2">
          We are focused on ensuring maximum profit by providing properly
          studied predictions. We work relentlessly everyday of the week from
          9am to 5pm of the week to ensure that our subscribers and user's get
          the most accurated predictions and forecasts.
        </p>
      </article>
    </main>
  );
};

export default About;
