import React from "react";
import { Helmet } from "react-helmet";
import BuyGames from "../components/games/BuyGames";

const BuyGamesScreen = () => {
  return (
    <main>
      <Helmet>
        <title>Buy Premium Games - Rhymebet</title>
        <meta name="description" content="Buy rhymebet premium games" />
      </Helmet>
      <BuyGames show={true} />
    </main>
  );
};

export default BuyGamesScreen;
