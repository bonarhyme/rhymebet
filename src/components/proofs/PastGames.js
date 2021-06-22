import React from "react";
import { LinkContainer } from "react-router-bootstrap";

const PastGames = () => {
  return (
    <section className="past-games">
      <LinkContainer to="/past-games">
        <button className="big-button">View Our Previous Games</button>
      </LinkContainer>
    </section>
  );
};

export default PastGames;
