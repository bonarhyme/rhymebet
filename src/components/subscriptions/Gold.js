import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { bank1 } from "../../data/variables";
import { plans } from "../plans/data";
import { UsePaystack } from "./UsePaystack";
import { getActiveSingleSub } from "../../actions/subscriptionActions";
import Message from "../Message";
import { Link } from "react-router-dom";

const Gold = () => {
  const dispatch = useDispatch();

  const [active, setActive] = useState(false);
  const [plan, setPlan] = useState(null);
  const [expiryDate, setExpiryDate] = useState(null);

  const { success, serverReply } = useSelector(
    (state) => state.singleSubActiveGet
  );

  useEffect(() => {
    dispatch(getActiveSingleSub());
    // eslint-disable-next-line
  }, []);

  useEffect(() => {
    if (success) {
      const { active, expiryDateLiteral, plan } = serverReply.activeSub;

      setActive(active);
      setExpiryDate(expiryDateLiteral);
      setPlan(plan);
    } else {
      setActive(false);
      setExpiryDate(null);
      setPlan(null);
    }
  }, [success, serverReply]);
  return (
    <main>
      {active && (
        <Message variant="info">
          You have an active{" "}
          <Link to={`/subscription/${plan}`}>
            <b>{plan.toString().toUpperCase()}</b>
          </Link>{" "}
          Plan
        </Message>
      )}
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
          <UsePaystack
            amount={plans.gold.price * 100}
            plan="gold"
            duration={plans.gold.durationShort}
          />
        </article>
      </section>
    </main>
  );
};

export default Gold;
