import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { bank2 } from "../../data/variables";
import { plans } from "../plans/data";
import { UsePaystack } from "./UsePaystack";
import { getActiveSingleSub } from "../../actions/subscriptionActions";
import Notice from "./Notice";
import ActiveNotice from "./ActiveNotice";

const Standard = () => {
  const dispatch = useDispatch();

  const [active, setActive] = useState(false);

  const { success, serverReply } = useSelector(
    (state) => state.singleSubActiveGet
  );

  useEffect(() => {
    dispatch(getActiveSingleSub());
    // eslint-disable-next-line
  }, []);

  useEffect(() => {
    if (success) {
      const { active } = serverReply.activeSub;

      setActive(active);
    } else {
      setActive(false);
    }
  }, [success, serverReply]);
  return (
    <main>
      <ActiveNotice />
      <Notice />
      <section>
        <h2 className="main-header">Standard Plan</h2>
        <img
          src={bank2}
          alt="standard-plan"
          className="responsive-image mx-auto d-block"
        />
        <article className="subs-container">
          <p>{plans.standard.description}</p>
          <p className="medium-font">
            <b>Duration:</b> {plans.standard.duration} Days
          </p>
          <p className="medium-font">
            <b>Price:</b> &#8358;{plans.standard.price}
          </p>
          <UsePaystack
            amount={plans.standard.price * 100}
            plan="standard"
            duration={plans.standard.durationShort}
            hidden={active ? true : false}
          />
        </article>
      </section>
    </main>
  );
};

export default Standard;
