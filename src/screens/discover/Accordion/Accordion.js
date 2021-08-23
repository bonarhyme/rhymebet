import React, { useState } from "react";
import Data from "./data";
import Question from "./Question";
import "./Accordion.css";

const Accordion = () => {
  // eslint-disable-next-line
  const [accordion, setAccordion] = useState(Data);

  return (
    <div className="main">
      <section className="section">
        {accordion.map((question) => {
          const { id } = question;
          return <Question key={id} {...question} className="question" />;
        })}
      </section>
    </div>
  );
};

export default Accordion;
