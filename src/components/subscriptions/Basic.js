import React from "react";
// import { useDispatch, useSelector } from "react-redux";

import { bank3 } from "../../data/variables";
import { plans } from "../plans/data";
import { UsePaystack } from "./UsePaystack";

const Basic = () => {
  return (
    <main>
      <section>
        <h2 className="main-header">Basic Plan</h2>
        <img
          src={bank3}
          alt="basic-plan"
          className="responsive-image mx-auto d-block"
        />
        <article className="subs-container">
          <p>{plans.basic.description}</p>
          <p className="medium-font">
            <b>Duration:</b> {plans.basic.duration} Days
          </p>
          <p className="medium-font">
            <b>Price:</b> &#8358;{plans.basic.price}
          </p>
          <UsePaystack
            amount={plans.basic.price * 100}
            plan="basic"
            duration={plans.basic.durationShort}
          />
        </article>
      </section>
    </main>
  );
};

export default Basic;
