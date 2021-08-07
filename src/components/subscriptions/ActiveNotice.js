import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import Message from "../Message";

import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";

const ActiveNotice = () => {
  const [active, setActive] = useState(false);
  const [plan, setPlan] = useState(null);

  const { success, serverReply } = useSelector(
    (state) => state.singleSubActiveGet
  );
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
    <>
      {active && (
        <Message variant="info">
          You have an active{" "}
          <Link to={`/subscription/${plan}`}>
            <b>{plan.toString().toUpperCase()}</b>
          </Link>{" "}
          Plan.
          {"  "}
          <HashLink title="View Premium games" smooth to={"/#premium"}>
            View Premium Games List Now.
          </HashLink>
        </Message>
      )}
    </>
  );
};

export default ActiveNotice;
