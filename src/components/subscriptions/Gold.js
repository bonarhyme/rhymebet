import React from "react";
// import { useDispatch, useSelector } from "react-redux";

import { bank1 } from "../../data/variables";
import { plans } from "../plans/data";
import { UsePaystack } from "./UsePaystack";

const Gold = () => {
  return (
    <main>
      <section>
        <h2 className="main-header">Gold Plan</h2>
        <img
          src={bank1}
          alt="gold-plan"
          className="responsive-image mx-auto d-block"
        />
        <article className="subs-container">
          <p>{plans.gold.description}</p>
          <p className="medium-font">
            <b>Duration:</b> {plans.gold.duration} Days
          </p>
          <p className="medium-font">
            <b>Price:</b> &#8358;{plans.gold.price}
          </p>
          <UsePaystack amount={plans.gold.price * 100} plan="gold" />
        </article>
      </section>
    </main>
  );
};

export default Gold;
