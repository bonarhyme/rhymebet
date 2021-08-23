import React from "react";
import { Helmet } from "react-helmet";

const Disclaimer = () => {
  return (
    <main>
      <Helmet>
        <title>Disclaimer - Rhymebet</title>
        <meta name="description" content=" rhymebet Disclaimer" />
      </Helmet>
      <h1 className="main-header">Disclaimer</h1>
      <p className="discover-paragraph">
        All our tips and predictions are solely from in house analysis,
        <strong> rhymebet.com</strong> do not sell fixed matches or associate
        with people that do so. <strong> rhymebet.com</strong> cannot be held
        responsible for your loss of money playing our free or premium games.
      </p>
      <p className="discover-paragraph">
        It should be noted that the information transmitted (Predictions) is
        intended only for persons above the age of 18.
      </p>
    </main>
  );
};

export default Disclaimer;
