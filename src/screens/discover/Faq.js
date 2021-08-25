import React from "react";
import { Helmet } from "react-helmet";

import Accordion from "./Accordion/Accordion";

const Faq = () => {
  return (
    <main>
      <Helmet>
        <title>Frequently Asked Questions - Rhymebet</title>
        <meta
          name="description"
          content="Rhymebet Frequently asked questions"
        />
      </Helmet>
      <h1 className="main-header-2">Frequently Asked Questions (FAQ)</h1>
      <Accordion />
    </main>
  );
};

export default Faq;
