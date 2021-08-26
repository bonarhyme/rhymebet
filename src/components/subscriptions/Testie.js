import React, { useState, useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";

import { bank5 } from "../../data/variables";
import { plans } from "../plans/data";
import { UsePaystack } from "./UsePaystack";
import { getActiveSingleSub } from "../../actions/subscriptionActions";
import Notice from "./Notice";
import ActiveNotice from "./ActiveNotice";

const Testie = () => {
  const dispatch = useDispatch();

  const [active, setActive] = useState(false);

  const { success, serverReply } = useSelector(
    (state) => state.singleSubActiveGet
  );

  const { userInfo } = useSelector((state) => state.userLogin);
  useEffect(() => {
    if (userInfo) {
      dispatch(getActiveSingleSub());
    }
    // eslint-disable-next-line
  }, [userInfo]);

  useEffect(() => {
    if (success) {
      const { active } = serverReply.activeSub;

      setActive(active);
    } else {
      setActive(false);
    }
  }, [success, serverReply]);

  const focusDiv = useRef(null);

  useEffect(() => {
    focusDiv.current.focus();
  }, []);

  return (
    <main>
      <ActiveNotice />
      <Notice />
      <section>
        <h2 className="main-header" ref={focusDiv} tabIndex="-1">
          Testie Plan
        </h2>
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

          <UsePaystack
            amount={plans.testie.price * 100}
            plan="testie"
            duration={plans.testie.durationShort}
            hidden={active ? true : false}
          />
        </article>
      </section>
    </main>
  );
};

export default Testie;
