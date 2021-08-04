import React from "react";
// import { useDispatch, useSelector } from "react-redux";

import { bank4 } from "../../data/variables";
import { plans } from "../plans/data";
import { UsePaystack } from "./UsePaystack";

const Noob = () => {
  return (
    <main>
      <section>
        <h2 className="main-header">Noob Plan</h2>
        <img
          src={bank4}
          alt="noob-plan"
          className="responsive-image mx-auto d-block"
        />
        <article className="subs-container">
          <p>{plans.noob.description}</p>
          <p className="medium-font">
            <b>Duration:</b> {plans.noob.duration} Days
          </p>
          <p className="medium-font">
            <b>Price:</b> &#8358;{plans.noob.price}
          </p>
          <UsePaystack
            amount={plans.noob.price * 100}
            plan="noob"
            duration={plans.noob.durationShort}
          />
        </article>
      </section>
    </main>
  );
};

export default Noob;
