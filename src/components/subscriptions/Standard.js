import React, { useState, useEffect, useRef } from "react";
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
          Standard Plan
        </h2>
        <img
          src={bank2}
          alt="standard-plan"
          className="responsive-image mx-auto d-block"
          height={500}
          width={500}
          loading="lazy"
        />
        <article className="subs-container">
          <p className="discover-paragraph">{plans.standard.description}</p>
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
