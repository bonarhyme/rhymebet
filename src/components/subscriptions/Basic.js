import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { bank3 } from "../../data/variables";
import { plans } from "../plans/data";
import { UsePaystack } from "./UsePaystack";
import { getActiveSingleSub } from "../../actions/subscriptionActions";

import Notice from "./Notice";
import ActiveNotice from "./ActiveNotice";

const Basic = () => {
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
            hidden={active ? true : false}
          />
        </article>
      </section>
    </main>
  );
};

export default Basic;
