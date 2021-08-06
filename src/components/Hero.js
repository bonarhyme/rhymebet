import React from "react";
import { LinkContainer } from "react-router-bootstrap";
import { FaKey } from "react-icons/fa";

import PremuimGamesList from "./games/PremiumGamesList";
import BuyGames from "./games/BuyGames";
import FreeGamesList from "./games/FreeGamesList";

const Hero = () => {
  return (
    <section>
      <div className="py-3 hero">
        <article className="m-5">
          <h3 className="main-header">Premium Games </h3>
          <LinkContainer to="/subscriptions">
            <button className="mb-2 mt-5 button-block wide-block bg-blue color-white">
              <FaKey />
              Unlock all
            </button>
          </LinkContainer>
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
