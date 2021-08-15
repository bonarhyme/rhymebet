import React, { useEffect, useState } from "react";
import { LinkContainer } from "react-router-bootstrap";
import { FaKey } from "react-icons/fa";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

import PremuimGamesList from "./games/PremiumGamesList";
import BuyGames from "./games/BuyGames";
import FreeGamesList from "./games/FreeGamesList";
import Message from "./Message";
import Notice from "./subscriptions/Notice";

const Hero = () => {
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
    // eslint-disable-next-line
  }, [success, serverReply]);

  return (
    <section>
      <div className="py-3 hero">
        <article className="m-5" id="premium" name="premium">
          <h3 className="main-header">Premium Games </h3>
          <Notice show={false} />
          {active ? (
            <Message variant="info">
              You have an active{" "}
              <Link to={`/subscription/${plan}`}>
                <b>{plan.toString().toUpperCase()}</b>
              </Link>{" "}
              Plan
            </Message>
          ) : (
            <LinkContainer to="/subscriptions">
              <button className="mb-2 mt-5 button-block wide-block bg-blue color-white">
                <FaKey />
                Unlock all
              </button>
            </LinkContainer>
          )}
          <PremuimGamesList see={false} />
        </article>

        <article className="m-5" id="free" name="free">
          {/* <h3 className="main-header">Free Games</h3> */}
          <FreeGamesList />
        </article>

        <div className="py-5 subscriptions">
          <BuyGames />
        </div>
      </div>
    </section>
  );
};

export default Hero;
