import React, { useEffect, useState } from "react";
import { Table } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";

import Loader from "../Loader";
import Message from "../Message";
import Notice from "../subscriptions/Notice";
import { getShortFreeGamesList } from "../../actions/gamesActions";

const ShortFreeGames = () => {
  const dispatch = useDispatch();
  const isFree = true;
  const pageNumber = 1;
  const [games, setGames] = useState([]);
  // eslint-disable-next-line
  const [creator, setCreator] = useState();

  const { loading, success, serverReply, error } = useSelector(
    (state) => state.gamesFreeShortListGet
  );

  useEffect(() => {
    dispatch(getShortFreeGamesList(isFree, creator, pageNumber));
    // eslint-disable-next-line
  }, [dispatch]);

  useEffect(() => {
    if (success) {
      setGames(serverReply.games);
    }
  }, [success, serverReply]);

  return (
    <div>
      <h2 className="main-header">Free Hot Picks</h2>
      <Notice />
      {loading ? (
        <Loader />
      ) : (
        <>
          {error && <Message variant="danger">{error}</Message>}
          <Table striped bordered hover responsive>
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
              {games.map((game, index) => {
                return game.games.map((singleGame, index) => {
                  const { corner, gg, matchTime, win, clubs, clubsFull } =
                    singleGame;

                  if (index < 4) {
                    return (
                      <tr key={index + 1}>
                        <td>{index + 1}</td>
                        <td title={clubsFull}>{clubs}</td>
                        <td title="Match result">{win}</td>

                        <td title="Both teams to score">{gg}</td>
                        <td title="Number of corners">{corner}</td>
                        <td className="small-font">
                          {new Date(matchTime).toLocaleString()}
                        </td>
                      </tr>
                    );
                  } else {
                    return null;
                  }
                });
              })}
            </tbody>
          </Table>
        </>
      )}
    </div>
  );
};

export default ShortFreeGames;
