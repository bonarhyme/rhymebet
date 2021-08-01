import React from "react";

import { bank5 } from "../../data/variables";
import { plans } from "../plans/data";
import { UsePaystack } from "./UsePaystack";

const Testie = () => {
  return (
    <main>
      <section>
        <h2 className="main-header">Testie Plan</h2>
        <img
          src={bank5}
          alt="testie-plan"
          className="responsive-image mx-auto d-block"
        />
        <article className="subs-container">
          <p>{plans.testie.description}</p>
          <p className="medium-font">
            <b>Duration:</b> {plans.testie.duration} Days
          </p>
          <p className="medium-font">
            <b>Price:</b> &#8358;{plans.testie.price}
          </p>
          <UsePaystack />
        </article>
      </section>
    </main>
  );
};

export default Testie;
