import React from "react";
import { LinkContainer } from "react-router-bootstrap";
import { FaKey } from "react-icons/fa";

import FreeGames from "./games/FreeGames";
import PremuimGames from "./games/PremiumGames";
import BuyGames from "./games/BuyGames";

const Hero = () => {
  return (
    <section>
      <div className="py-3 hero">
        <article className="m-5">
          <h3 className="main-header">Premuium Games </h3>
          <LinkContainer to="/subscriptions">
            <button className="mb-2 mt-5 button-block wide-block bg-blue color-white">
              <FaKey />
              Unlock all
            </button>
          </LinkContainer>
          <PremuimGames />
        </article>

        <article className="m-5" id="free" name="free">
          <h3 className="main-header">Free Games</h3>
          <FreeGames />
        </article>

        <div className="py-5 subscriptions">
          <h2 className="main-header">Subscriptions</h2>
          <BuyGames />
        </div>
      </div>
    </section>
  );
};

export default Hero;
