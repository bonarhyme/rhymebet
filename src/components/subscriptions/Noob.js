import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { bank4 } from "../../data/variables";
import { plans } from "../plans/data";
import { UsePaystack } from "./UsePaystack";
import { getActiveSingleSub } from "../../actions/subscriptionActions";

import Notice from "./Notice";
import ActiveNotice from "./ActiveNotice";

const Noob = () => {
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
  return (
    <main>
      <ActiveNotice />
      <Notice />
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
