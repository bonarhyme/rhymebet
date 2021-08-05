import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { bank4 } from "../../data/variables";
import { plans } from "../plans/data";
import { UsePaystack } from "./UsePaystack";
import { getActiveSingleSub } from "../../actions/subscriptionActions";
import Message from "../Message";
import { Link } from "react-router-dom";

const Noob = () => {
  const dispatch = useDispatch();

  const [active, setActive] = useState(false);
  const [plan, setPlan] = useState(null);

  const { success, serverReply } = useSelector(
    (state) => state.singleSubActiveGet
  );

  useEffect(() => {
    dispatch(getActiveSingleSub());
    // eslint-disable-next-line
  }, []);

  useEffect(() => {
    if (success) {
      const { active, plan } = serverReply.activeSub;

      setActive(active);

      setPlan(plan);
    } else {
      setActive(false);

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
            hidden={active ? true : false}
          />
        </article>
      </section>
    </main>
  );
};

export default Noob;
