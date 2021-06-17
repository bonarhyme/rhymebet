import React from "react";
import { Table } from "react-bootstrap";

import { games } from "./games";

const ShortFreeGames = () => {
  return (
    <div>
      <h2 className="main-header">Free Hot Picks</h2>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>

            <th>Clubs</th>
            <th>Win</th>
            <th>GG</th>
            <th>Corner</th>
            <th>Time</th>
          </tr>
        </thead>
        <tbody>
          {games.length > 0 &&
            games.map((game, index) => {
              const { win, clubs, clubsFull, matchTime, corner, gg } = game;
              if (index < 4) {
                return (
                  <tr>
                    <td>{index + 1}</td>

                    <td title={clubsFull}>{clubs}</td>
                    <td title="Match result">{win}</td>
                    <td title="Both teams to score">{gg}</td>
                    <td title="Number of corners">{corner}</td>
                    <td className="small-font">{matchTime}</td>
                  </tr>
                );
              }
              return null;
            })}
        </tbody>
      </Table>
    </div>
  );
};

export default ShortFreeGames;
